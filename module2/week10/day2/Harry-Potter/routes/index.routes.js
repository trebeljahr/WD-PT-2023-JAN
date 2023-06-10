const express = require("express");
const router = express.Router();
const CharModel = require("../models/HP-Character.model");

/* GET home page */
router.get("/", async (req, res) => {
  const charsFromMyDB = await CharModel.find();
  //console.log("response from our db", charsFromMyDB);
  res.render("index", { charsFromMyDB });
});

router.get("/character/:id", async (req, res) => {
  //params will be an object with the name you gave on the route here and the value from url
  //ex: params { id: '642efb08a94b5e6a5c35c790' }
  //console.log("params", req.params);

  //destructor the params to get the value
  //const id = req.params.id
  const { id } = req.params;
  const oneWizard = await CharModel.findById(id);
  console.log("our one wizard", oneWizard);
  res.render("characters/char-detail", { oneWizard });
});

router.post("/create", async (req, res) => {
  const newWizard = await CharModel.create(req.body);
  console.log("here is our new wizard", newWizard);
  res.redirect("/");
});

module.exports = router;
