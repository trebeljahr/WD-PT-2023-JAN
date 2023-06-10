// set up
// old way of doing this
// const express = require("express");

// new way of doing this
import express from "express";

// keep in mind the "type": "module" in package.json or .mjs
// file extension and that this will only work with
// newer versions of node!

// some things like __dirname don't work when using node
// in ES6 module scope like they used to.
// so you have to fix them.
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// much more on this topic can be found in the docs:
// https://nodejs.org/api/esm.html#esm_no_require_exports_module_exports_filename_dirname
// specifically the stuff not working:
// https://nodejs.org/api/esm.html#differences-between-es-modules-and-commonjs

// now on to the app!
const app = express();
const port = 3000;

// this registers the public folder so that we can access the static assets in the
// client
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("home route");
  // res.send('<h1>This is the Home Page 👋</h1>')
  console.log(__dirname);
  res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/dog", (req, res, next) => {
  res.sendFile(__dirname + "/views/dog-page.html");
});

app.get("/cat", (req, res, next) => {
  res.sendFile(__dirname + "/views/cat-page.html");
});

app.get("/turtle", (req, res, next) => {
  res.sendFile(__dirname + "/views/turtle.html");
});

app.get("/about", (req, res) => {
  res.send("<h1> 🦄 🌈 This is the About Page 🌈 🦄 </h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port} 🦄 🌈`);
});
