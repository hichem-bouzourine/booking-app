const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  // Login the user
  const result = validate(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  // Search the user by email
  const user = await User.findOne({ email: req.body.email.trim() });
  if (!user) return res.status(404).send("Email or password is incorrect.");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Email or password is incorrect.");

  // Destructure obj properties
  const { password, isAdmin, ...otherDetails } = user._doc;

  // Create the token
  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT
  );

  // Send the token via cookies
  res
    .cookie("access_token", token, { httpOnly: true })
    .status(200)
    .send({ ...otherDetails });
});

function validate(req) {
  const Schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email().trim(),
    password: Joi.string().min(5).max(255).required(),
  });
  return Schema.validate(req);
}
module.exports = router;
