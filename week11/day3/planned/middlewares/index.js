const app = require("express")();
const fs = require("fs/promises");
const path = require("path");

app.use((req, res, next) => {
  //   console.log(req);
  //   console.log(res);
  req.myStuff = "hello world";
  next();
});

async function myPublicDirectoryMiddleware(req, res, next) {
  console.log("before req.method check");
  if (req.method === "GET") {
    console.log(req.url);
    try {
      const filePath = path.join(__dirname, "public", req.url);
      console.log(filePath);
      const fileExists = await fs.stat(filePath);
      console.log(fileExists);
      if (fileExists) {
        return res.sendFile(filePath);
      }
    } catch (err) {
      console.error(err);
    }

    // const file = await readFile();
  }
  next();
}

app.use(myPublicDirectoryMiddleware);

app.use((req, res, next) => {
  console.log("hello", req.myStuff);
  res.send("hi");
});

app.listen(3000, () => {
  console.log("Listening on PORT", 3000);
});
