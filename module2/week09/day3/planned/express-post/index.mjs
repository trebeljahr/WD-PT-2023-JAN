import express from "express";
import expressSanitizer from "express-sanitizer";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import sharp from "sharp";
import chalk from "chalk";

// filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
// different ways to encode form data, let's parse json and urlencoding!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add sanitizer to prevent XSS from user input
app.use(expressSanitizer());
// add logger
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// show it in the network tab - where requests happen what they look like
app.post("/form", (req, res) => {
  console.log(req.url);
  console.log(req.body);
  const cleanName = req.sanitize(req.body.name);
  console.log(cleanName);
  res.send(`${cleanName} - thank you for submitting the form!`);
});

// test it with curl!
// curl -X POST -F 'name="Rico"' localhost:3000/form
// curl -X POST -H 'Content-Type: application/json' -d '{"name":"Rico"}' localhost:3000/form

app.post("/upload-avatar", async (req, res) => {
  try {
    if (!req.files) {
      res.send({ status: false, message: "No file uploaded" });
    } else {
      let avatar = req.files.avatar;
      // don't forget to sanitize user input!
      let sanitizedName = req.sanitize(avatar.name);

      // we need to move the file to our uploads directory
      const location = __dirname + "/public/uploads/" + sanitizedName;
      await avatar.mv(location);

      // instead of responding in this way - do you know of another
      // way this could be done that we learned earlier this week?
      res.send(
        `<div><img width=300 height=300 style="object-fit: cover" src='/uploads/${sanitizedName}'/></div>`
      );
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// test it with curl as well!
// curl -X POST -F avatar=@/home/rico/Downloads/test.png localhost:3000/upload-avatar

// let's build a black and white service!
app.post("/grayscale", async (req, res) => {
  try {
    if (!req.files) {
      return res.send({ status: false, message: "No file uploaded" });
    }

    let avatar = req.files.avatar;
    let sanitizedName = req.sanitize(avatar.name);

    const rawLocation = __dirname + "/public/uploads/" + sanitizedName;
    await avatar.mv(rawLocation);

    await sharp(rawLocation)
      .grayscale()
      .toFile(__dirname + "/public/uploads/grayscale/" + sanitizedName);

    const src = `/uploads/grayscale/${sanitizedName}`;
    res.send(
      `<div><a href="${src}" download><img width=300 height=300 style="object-fit: cover" src="${src}"/></a><p>Click the image to download it!</p></div>`
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

// curl -X POST -F avatar=@/home/rico/Downloads/test.png localhost:3000/grayscale

app.listen(PORT, () => {
  console.log(chalk.yellow(`Listening on ${PORT}`));
});
