const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(console.log("Connected to DB"));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDB };