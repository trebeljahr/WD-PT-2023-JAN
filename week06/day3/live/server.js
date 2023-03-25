const express = require("express");
const app = express();
const hbs = require("hbs");
const axios = require("axios");
const path = require("path");
app.set("view engine", "hbs");

//this is linking css to the hbs files with app.use as a middleware
app.use(express.static("public"));

//helper function to make all capital letters
hbs.registerHelper("yelling", (str) => {
  return str.toUpperCase() + "!!!";
});
//partial helper register
hbs.registerPartials(path.join(__dirname, "views", "partials"));
//just a port number
const PORT = 3000;
//function to fetch some data :) with async and await
const getData = async () => {
  try {
    let data = await fetch(
      "https://www.episodate.com/api/show-details?q=friends"
    );
    let parsed = await data.json();
    //console.log("here is the parsed data", parsed);
    return parsed;
  } catch (error) {
    console.log("there was an error fetching data", error);
  }
};
//getData();
//function to fetch data with .then and .catch
//in axios, everything is accessed through the .data key
function getData2() {
  axios("https://www.episodate.com/api/show-details?q=vikings")
    .then((axiosResponse) => {
      console.log("axios response", axiosResponse.data);
    })
    .catch((err) => console.log("there was an error", err));
}
//getData2();

const studentsArray = ["Olga", "Yo-Jai", "Rohan"];
//route for our home route for just /
app.get("/", async (req, res) => {
  // const friendsData = await getData();
  //console.log("From our / route", friendsData);
  res.render("home", {
    name: "Shaun",
    fromEngland: "Yes hes from England",
    likesToClimb: true,
    address: {
      street: "123 London way",
      postcode: 123456,
    },
    studentsArray,
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
