const mongoose = require("mongoose");
const MONGODB_URI = require("./login");

async function connect() {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(
      `${MONGODB_URI}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("🌸 Successfully connected to the database");
  } catch (error) {
    console.log("🌸 Error connecting to the database");
    console.log(error);
  }
}

module.exports = connect;
