require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const hotels = require("./routes/hotels");
const users = require("./routes/users");
const rooms = require("./routes/rooms");
const auth = require("./routes/auth");
const err = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/hotels", hotels);
app.use("/api/users", users);
app.use("/api/rooms", rooms);
app.use("/api/auth", auth);

app.use(err);

dotenv.config();
const db = process.env.MONGO;
mongoose
  .connect(db)
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Error while connectig to database."));

app.listen(8000, () => console.log("Backend connected."));
