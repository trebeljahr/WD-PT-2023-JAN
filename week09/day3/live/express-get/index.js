const express = require("express");
const axios = require("axios");

// STEPS for setting up a server:

// install necessary packages (often, express, axios, hbs, mongoose, .env)
// setup express boilerplate => static directories, handlebars, mongodb connection, environments etc.
// add routes you want to handle (app.get("/"), app.get("/about"), app.post("/create-user") etc. )

// add logic to the route handlers in express (second argument of the app.get and app.post)
// query APIs for the data you need, or query your DB for data you need, or even chain
// multiple of those together, or include timestamps, do some calculation etc.
// at the end you should have the data that you need for the feature you are building in a
// variable somewhere.

// return a response from the route handler, including the data you want to send (if any)
// you can use (res.send, res.sendFile, res.json, res.render etc.)
// and send text, json, complete files, or even render hbs or other templates and send full HTML pages

const app = express();
const PORT = 3000;

// app.get("/favicon.ico", (req, res) => {
//   res.sendFile("pathToFavicon");
// });

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("main");
});

const baseAPIRoute = "https://rickandmortyapi.com/api/character/?name=";

app.get("/find-by-name", async (req, res) => {
  // important: req.query is depending on user input, usually the key/value pairs of this object will come from an HTML form...
  // e.g. <form><input name="pizza" type="text" value="margherita"/></form>
  // will upon sending to this route create a req.query object with { pizza: "margherita" } as value
  console.log(req.query);

  // assemble the API route, to query rickandmortyapi for the data for the name the user provided
  const apiRouteToQuery = baseAPIRoute + req.query.name;

  const response = await axios.get(apiRouteToQuery);

  console.log(response.data);

  //   res.send("Looking for character... " + req.query.name);
  res.render("multiple-characters", { characters: response.data.results });
});

// variable path names => URL parameters
app.get("/people/:firstName", (req, res) => {
  // the key :firstName determines what goes into req.params
  // values will be strings! so you have to convert to numbers if you need numbers.

  // a request to localhost:3000/people/rico would log { firstName: "rico" }
  console.log(req.params);
  // req.params is used for accessing the URL parameters from the request object.

  // in reality this should do a database query to see whether the user exists or not
  const userExistsInDatabase = true;

  if (userExistsInDatabase) {
    res.send(`Hello ${req.params.firstName}`);
  } else {
    res.status(404).send("Sorry this doesn't exist");
  }
});

// you can have multiple URL parameters:
app.get("/people/:firstName/:order", (req, res) => {
  console.log(req.params);
  // a request to localhost:3000/people/rico/1 would log { firstName: "rico", order: "1" }
  // values will be strings! so you have to convert to numbers if you need numbers.

  // in reality this would do a database query
  const userExistsInDatabase = true;

  // you could adjust the response based on whether the user exists in the database
  if (userExistsInDatabase) {
    res.send(`Hello ${req.params.firstName}`);
  } else {
    res.status(404).send("Sorry this doesn't exist");
  }
});

// structure of a URL
// https://    somedomain.com  :43              /path/name   ?key=value&nextKey=nextValue
// protocol    domain         port (opt.)      path name     query

app.get("/api", (req, res) => {
  // req.query logs the query parameters
  // a query like ?key=value&nextKey=nextValue would get parsed to { key: "value", nextKey: "nextValue"}
  console.log(req.query);
  res.send("You're on the API page");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
