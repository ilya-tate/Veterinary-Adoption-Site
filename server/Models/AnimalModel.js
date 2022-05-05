const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["f", "m", "female", "male", "F", "Female", "M", "Male"],
  },
  animal: {
    type: String,
  },
  breed: {
    type: String,
  },
  colors: {
      type: String,
  },
  needs: {
      type: String,
  },
  description: {
    type: String,
  },
  vaccinations: {
      type: String,
  },
  spayed: {
    type: String,
  },
  pictures: [
    {
      type: String,
    }
  ],
  videos: [
    {
      type: String,
    }
  ]
});

module.exports = mongoose.model("Animal", AnimalSchema);
