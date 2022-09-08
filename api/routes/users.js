const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const verifyUser = require("../middleware/verifyUser");

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
    .cookie("access_token", token, { httpOnly: true })
    .status(200)
    .send("Registration successful");
});

router.put("/:id", [auth, verifyUser], async (req, res) => {
  const result = validateUser(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  if (!user)
    return res.status(404).send("User with the given ID could not be found.");
  res.status(200).send(user);
});

router.delete("/:id", [auth, verifyUser], async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user)
    return res.status(404).send("User with the given ID could not be found.");

  res.status(200).send(req.params.id);
});

router.get("/:id", [auth, verifyUser], async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("User not found.");

  const { password, isAdmin, ...otherDetails } = user._doc;
  res.send({ ...otherDetails });
});

router.get("/", [auth, admin], async (req, res) => {
  const users = await User.find();

  res.send(users);
});

module.exports = router;
