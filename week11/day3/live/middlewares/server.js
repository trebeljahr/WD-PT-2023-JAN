const app = require("express")();

app.use("/", (req, res, next) => {
  console.log("1.");
  console.log("our pizza key right now:", req.ourPizzaKey);
  next();

  // when calling next, that should be the last thing we do...
  // res.send();
});

// app.use("/profile", (req,res,next) => {
// })

app.use("/", (req, res, next) => {
  req.ourPizzaKey = "Margherita";
  if (req.method === "GET") {
    // the logic we want...
  }

  next();
});

app.get("/", (req, res, next) => {
  console.log("1.5, from the app.get");
  console.log("our pizza key right now:", req.ourPizzaKey);
  next();
});

app.use("/", (req, res, next) => {
  console.log("2.");
  next();
});

app.use("/", (req, res, next) => {
  req.ourPizzaKey = "Diavolo";
  console.log("3.");
  next();
});

app.use("/", (req, res) => {
  console.log("our pizza key right now:", req.ourPizzaKey);

  res.send("hello there");
});

///
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
