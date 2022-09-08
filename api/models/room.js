const mongoose = require("mongoose");
const Joi = require("joi");

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: [Date],
      },
    ],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

const validateRoom = (room) => {
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

  return schema.validate(room);
};

module.exports.Room = Room;
module.exports.validateRoom = validateRoom;
