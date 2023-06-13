function ensureUserIsLoggedOut(req, res, next) {
  if (req.session.currentUser) {
    return res.redirect("/profile");
  }

  next();
}

function ensureUserIsLoggedIn(req, res, next) {
  if (!req.session.currentUser) {
    return res.redirect("/login");
  }

  next();
}

module.exports = { ensureUserIsLoggedIn, ensureUserIsLoggedOut };
