const express = require("express");
const router = express.Router();
const { Hotel, validateHotel } = require("../models/hotel");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const result = validateHotel(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  const hotel = await new Hotel(req.body).save();

  res.send(hotel);
});

router.put("/:id", auth, async (req, res) => {
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

router.delete("/:id", auth, async (req, res) => {
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
  const { min, max, ...others } = req.query;

  const hotels = await Hotel.find({
    ...others,
    cheapestPrice: { $gte: min | 1, $lte: max | 1000 },
  }).limit(req.query.limit);

  if (!hotels) return res.status(404).send("There are no hotels.");

  res.send(hotels);
});

// Get Hotel by "city name"
router.get("/count/ByCity", async (req, res) => {
  const cities = req.query.cities.split(",");

  const list = await Promise.all(
    cities.map((city) => {
      return Hotel.countDocuments({ city: city });
    })
  );

  if (!list) return res.status(404).send("There are no list.");

  res.send(list);
});

// Get Hotel by "Type"
router.get("/count/ByType", async (req, res) => {
  const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  const resortCount = await Hotel.countDocuments({ type: "resort" });
  const villaCount = await Hotel.countDocuments({ type: "villa" });
  const cabinCount = await Hotel.countDocuments({ type: "cabin" });

  res.status(200).json([
    { type: "hotels", count: hotelCount },
    { type: "apartments", count: apartmentCount },
    { type: "resorts", count: resortCount },
    { type: "villas", count: villaCount },
    { type: "cabins", count: cabinCount },
  ]);
});

module.exports = router;
