const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfully");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.listen(process.env.PORT, () => {
  console.log("Server is running on", process.env.PORT);
});
