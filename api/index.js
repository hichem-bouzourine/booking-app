const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const hotels = require("./routes/hotels");
const users = require("./routes/users");
const rooms = require("./routes/rooms");
const auth = require("./routes/auth");
const app = express();

app.use(express.json());
app.use("/api/hotels", hotels);
app.use("/api/users", users);
app.use("/api/rooms", rooms);
app.use("/api/auth", auth);

dotenv.config();
const db = process.env.MONGO;
mongoose
  .connect(db)
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Error while connectig to database."));

app.listen(8000, () => console.log("Backend connected."));
