const express = require("express");
const router = express.Router();
const { Hotel } = require("../models/hotel");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Room } = require("../models/room");

//CREATE
router.post("/:hotelId", [auth, admin], async (req, res) => {
  const hotelId = req.params.hotelId;
  const room = new Room(req.body);

  const savedRoom = await room.save();

  await Hotel.findByIdAndUpdate(hotelId, {
    $push: { rooms: savedRoom._id },
  });

  res.status(200).json(savedRoom);
});

//UPDATE
router.put("/availability/:id", async (req, res) => {
  await Room.updateOne(
    { "roomNumbers._id": req.params.id },
    {
      $push: {
        "roomNumbers.$.unavailableDates": req.body.dates,
      },
    }
  );
  res.status(200).json("Room status has been updated.");
});

router.put("/:id", [auth, admin], async (req, res) => {
  const updatedRoom = await Room.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updatedRoom);
});

//DELETE
router.delete("/:id/:hotelId", [auth, admin], async (req, res) => {
  const hotelId = req.params.hotelId;

  await Room.findByIdAndDelete(req.params.id);

  await Hotel.findByIdAndUpdate(hotelId, {
    $pull: { rooms: req.params.id },
  });

  res.status(200).json("Room has been deleted.");
});

//GET
router.get("/:id", async (req, res) => {
  const room = await Room.findById(req.params.id);
  res.status(200).json(room);
});

//GET ALL
router.get("/", async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json(rooms);
});

module.exports = router;
