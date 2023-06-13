const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);
// router.use("/", authRoutes);

// both do the same, the below is a little more concise.
// router.use("/auth", require("./auth.routes"));
// router.use("/", require("./auth.routes"));

module.exports = router;
