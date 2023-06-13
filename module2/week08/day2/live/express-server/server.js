const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("<h1>Hello there!</h1>");
});

let counter = 0;
app.get("/user-count", (req, res) => {
  res.send(`Hi this is the ${++counter} time this page was viewed`);
});

app.get("/turtle", (req, res) => {
  res.sendFile(__dirname + "/views/turtle.html");
});

// app.get("/images/baby-turtle.png", ())

app.get("/dog", (req, res) => {
  res.sendFile(__dirname + "/views/dog.html");
});

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/cat.html");
});

app.listen(3000, () => {
  console.log("Listening here on PORT 3000");
});
