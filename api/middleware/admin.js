function admin(req, res, next) {
  const { isAdmin } = req.user;
  if (!isAdmin) return res.status(403).send("USER NOT AUTHORIZED");

  next();
}

module.exports = admin;
