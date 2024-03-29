const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const isLoggedOut = require("../middlewares/isLoggedOut");

const router = require("express").Router();

router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect("/");
  });
});

router.get("/signup", isLoggedOut, (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  console.log(req.body);

  // DON'T EVER DO THIS.
  //   const user = new User({ email: req.body.email, password: req.body.password });

  // hash function => easy to compute one way.

  // plain text => hash is super easy
  // hash => plain text

  // hash functions are super hard to write, don't write your own... ever.

  const salt = await bcryptjs.genSalt(12);
  const hash = await bcryptjs.hash(req.body.password, salt);

  const user = new User({ email: req.body.email, password: hash });
  await user.save();

  // const user = await User.create({ email: req.body.email, password: hash })

  res.send("signed up");
});

router.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(user);

    if (!user) {
      return res.render("auth/login", { error: "User not existent" });
    }

    const passwordsMatch = await bcryptjs.compare(
      req.body.password,
      user.password
    );

    if (!passwordsMatch) {
      return res.render("auth/login", {
        error: "Sorry the password is incorrect!",
      });
    }

    req.session.user = {
      email: user.email,
      // you can adapt this to hold more data and info
      // admin: user.admin
    };

    console.log(req.body);
    res.redirect("/profile");
  } catch (err) {
    next(err);
  }
});

// most basic version of login, with res.sends...
// router.post("/login", async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });

//     console.log(user);

//     if (!user) {
//       return res.send(
//         "user does not exist, are you sure the email is correct?"
//       );
//     }

//     const passwordsMatch = await bcryptjs.compare(
//       req.body.password,
//       user.password
//     );

//     if (!passwordsMatch) {
//       return res.send("sorry the password is incorrect!");
//     }

//     console.log(req.body);
//     res.send("welcome user!");
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
