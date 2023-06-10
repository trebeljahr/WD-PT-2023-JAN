const axios = require("axios");
const CharModel = require("../models/HP-Character.model");
//connects to the db, should be the first thing you do
require("../db");

//this function fetches all of the data for the api and then inserts it into our DB
const getData = async () => {
  try {
    const responseFromApi = await axios(
      "https://hp-api.onrender.com/api/characters"
    );
    const data = responseFromApi.data;
    // console.log("here is your data", data);
    const goodData = data.map((char) => {
      return {
        name: char.name,
        house: char.house,
        image: char.image,
        wand: char.wand,
      };
    });
    //console.log("good data", goodData);
    const responseFromDB = await CharModel.create(goodData);
    console.log("Got all the info in the DB!", responseFromDB);
  } catch (err) {
    console.log("there was an error", err);
  }
};
getData();
