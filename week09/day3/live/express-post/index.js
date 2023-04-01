const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const app = express();
const PORT = 3000;

// we need these two lines because they will fill in the req.body field for the request object
// app.use registers a middleware.
// a middleware is a function that is running in express when a request happens
// the ones for express.json() will do something like this (pseudo-code)
// function (req, res, next) {
// req.body = parseRequestBodyMagic(req.theDataInEncodedForm)
// next(req, res) // next here is the next middleware function in the stack
// }
// because next is called with req and res, the next request handler (from say app.post or app.get)
// will get the modified req object, with the req.body being already there.
// therefore the order of calling these is very important, since that's the order in which they will be called by express as well
// i.e. current middlewares look like this:
// express.json => express.urlencoded => express.static => fileUpload => (the route handlers for a particular route)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// path is just a module to manipulate pathnames
// __dirname is a variable that node.js gives us that will point to the current point in the directory, no matter on which machine the code will be run
// join just joins pathnames together with the correct separator (which is operating system specific)
const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));
app.use(fileUpload({ createParentPath: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// what does app.post do?
// first what is app? => express object with methods .put, .patch, .post, .get, .use and many many more.
// then .post is a method (a function) that adds a request handler, to a specific route.
// it excepts 2 arguments, the route/url you want to handle, as the first argument
// and a function that will be called whenever the server gets a request on that url
// as the second argument. since this second arg is a function itself, when it will be called
// it will be supplied with 3 arguments, req, res and next. the names don't matter here.
// could be (request, response) => {} or (a, b) => {}
// the first is always the request object, the second one is always the response object
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

  // req.files only exists because of the fileUpload middleware that we were using earlier...
  // imagePath is the location where we want to move the file to
  // the whole operation is async, so we need to be careful here to await it being done, before we send the
  // response that links to the image.
  await req.files.image.mv(imagePath);

  res.send(
    `<h1>Succesfully sent in the form!</h1><img width="400" height="400" src='/${imageName}'/>`
  );
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
