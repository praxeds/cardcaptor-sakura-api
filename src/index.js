const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set('strictQuery', false).connect("mongodb://localhost/cardcaptor-sakura");

app.use(express.json());

app.listen(3000, () => {
  console.log(`🌸 Server is listening on http://localhost:3000`);
});

app.get("/", (req, res) => {
  res.status(200).send({
    welcomeMessage: "🌸 Cardcaptor Sakura API 🌸",
  });
});