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
  const hotels = await Hotel.find();

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

router.get("/count/ByType", async (req, res) => {
  const types = req.query.types.split(",");

  const list = await Promise.all(
    types.map((type) => {
      return Hotel.countDocuments({ type: types });
    })
  );

  if (!list) return res.status(404).send("There are no list.");

  res.send(list);
});

module.exports = router;
