function verifyUser(req, res, next) {
  if (req.user.id === req.params.id || req.user.isAdmin) next();
  else return res.status(401).send("Operation forbidden");
}

module.exports = verifyUser;
