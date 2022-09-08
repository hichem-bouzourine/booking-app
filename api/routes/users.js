const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Register a user
router.post("/", async (req, res) => {
  // make sure that we receive a proper user, otherwise, we should not continue the process
  const result = validateUser(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);
  // check the availability of that new user by his email
  let user = await User.findOne({ email: req.body.email.trim() });
  if (user) return res.status(400).send("User already exists");

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  user = new User(req.body);
  user.password = password;

  await user.save();

  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT
  );

  res
    .cookie("access-token", token, { httpOnly: true })
    .status(200)
    .send("Registration successful");
});

router.put("/id", async (req, res) => {});

router.delete("/id", async (req, res) => {});

router.get("/id", async (req, res) => {});

router.get("/", async (req, res) => {});

module.exports = router;
