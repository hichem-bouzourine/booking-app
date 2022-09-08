const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 5,
      maxlength: 255,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required(),
    country: Joi.string().required(),
    img: Joi.string(),
    city: Joi.string().required(),
    phone: Joi.string().required(),
    password: Joi.string().min(5).max(255).required(),
    isAdmin: Joi.boolean().required(),
  });

  return schema.validate(user);
};

module.exports.User = User;
module.exports.validateUser = validateUser;
