const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const app = express();
const PORT = 3000;

// (req, res) => {
// req.body = { email: "", password: "" }
// }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));
app.use(fileUpload({ createParentPath: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/signup", (req, res) => {
  // console.log(req);
  console.log(req.body);

  res.send("Succesfully sent in the form!");
});

app.post("/api/file-upload", async (req, res) => {
  console.log(req.files);

  const imageName = req.files.image.name;
  //   const {
  //     files: {
  //       image: { name },
  //     },
  //   } = req;
  const imagePath = path.join(publicDirectoryPath, imageName);

  console.log(imagePath);
  await req.files.image.mv(imagePath);

  res.send(`<h1>Succesfully sent in the form!</h1><img src='/${imageName}'/>`);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
