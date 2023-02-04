const mongoose = require("mongoose");
const { username, password, cluster } = require("./login");

async function connect() {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(
      `mongodb+srv://${username}:${password}@${cluster}`,
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
