const express = require("express");
const router = express.Router();
const { Hotel, validateHotel } = require("../models/hotel");

router.post("/", async (req, res) => {
  const result = validateHotel(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  const hotel = await new Hotel(req.body).save();

  res.send(hotel);
});

router.put("/:id", async (req, res) => {
  const result = validateHotel(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  const hotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  if (!hotel)
    return res.status(404).send("Hotel with the given ID could not be found.");
  res.status(200).send(hotel);
});

router.delete("/:id", async (req, res) => {
  const hotel = await Hotel.findByIdAndDelete(req.params.id);

  if (!hotel)
    return res.status(404).send("Hotel with the given ID could not be found.");

  res.status(200).send(req.params.id);
});

router.get("/:id", async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (!hotel)
    return res.status(404).send("Hotel with the given ID could not be found.");

  res.send(hotel);
});

router.get("/", async (req, res) => {
  const hotels = await Hotel.find();

  if (!hotels) return res.status(404).send("There are no hotels.");

  res.send(hotels);
});

module.exports = router;
