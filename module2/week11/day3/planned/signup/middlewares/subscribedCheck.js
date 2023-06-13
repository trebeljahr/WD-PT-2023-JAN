function ensureUserIsSubscribed(req, res, next) {
  if (!req.session.currentUser.subscribed) {
    return res.redirect("/subscribe");
  }

  next();
}

module.exports = { ensureUserIsSubscribed };
