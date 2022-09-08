const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).send("Access denied. No token provided");

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(400).send("Invalid token.");
    req.user = user;
    next();
  });
}

module.exports = auth;
