const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(
      process.env.MONGODB_URI,
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
