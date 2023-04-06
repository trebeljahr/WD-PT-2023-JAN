const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/example", async (req, res) => {
  console.log("example routes");
});

module.exports = router;
