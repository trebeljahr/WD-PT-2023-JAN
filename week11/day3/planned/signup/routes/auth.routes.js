const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const {
  ensureUserIsLoggedOut,
  ensureUserIsLoggedIn,
} = require("../middlewares/loginChecks");
const { ensureUserIsSubscribed } = require("../middlewares/subscribedCheck");
const saltRounds = 12;

// const { promisify } = require("utils")

// const crypto = require("crypto");
// const { promisify } = require("util");
// const scrypt = promisify(crypto.scrypt);

const router = require("express").Router();

router.get("/signup", ensureUserIsLoggedOut, (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  console.log(req.body);

  //   ... do something
  const { email, password } = req.body;
  // never ever do this!
  // const newUser = new User({ email, password });

  const salt = await bcryptjs.genSalt(saltRounds);
  console.log(salt);

  const hash = await bcryptjs.hash(password, salt);
  console.log(hash);

  const newUser = new User({ email, password: hash });
  await newUser.save();
  res.redirect("/profile");
});

// ?name=value
// {
//   [name]: value
// }

router.get("/login", ensureUserIsLoggedOut, (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  console.log(req.body);

  const existingUser = await User.findOne({ email: req.body.email });

  if (!existingUser) {
    console.log("Failed to find user with that email");
    return res.render("auth/login", {
      error: "Failed to find user with that email, Sign up first please!",
    });
  }

  // console.log(req.body.password);
  // console.log(existingUser.password);

  // const saltOnPassword = bcryptjs.getSalt(existingUser.password);
  // console.log(await bcryptjs.hash(req.body.password, saltOnPassword));

  const passwordIsCorrect = await bcryptjs.compare(
    req.body.password,
    existingUser.password
  );

  if (!passwordIsCorrect) {
    console.log("wrong password");
    return res.render("auth/login", { error: "there was an error logging in" });
  }

  console.log("correct password!");
  req.session.currentUser = {
    email: existingUser.email,
    subscribed: existingUser.subscribed,
  };
  return res.redirect("/profile");
});

router.get("/profile", ensureUserIsLoggedIn, async (req, res) => {
  const user = await User.findOne({ email: req.session.currentUser.email });
  console.log(user);

  console.log(user.name);

  res.render("auth/profile", { name: user.name });
});

router.post("/logout", (req, res, next) => {
  console.log("logging out...");
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

router.get("/subscribe", (req, res) => {
  res.render("subscribe");
});

router.get(
  "/premium",
  ensureUserIsLoggedIn,
  ensureUserIsSubscribed,
  (req, res) => {
    res.render("premium-content");
  }
);

// const adminRouter = require("express").Router();

// adminRouter.get("/dashboard", () => {
//   res.send("dashboard info");
// });

// router.use("/admin", ensureIsAdmin, adminRouter);

module.exports = router;
