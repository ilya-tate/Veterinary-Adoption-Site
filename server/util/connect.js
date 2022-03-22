const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(console.log("Connected to DB"));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = { connectDB };
