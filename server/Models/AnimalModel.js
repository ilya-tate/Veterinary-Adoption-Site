const { truncate } = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: true
  },
  animal: {
    type: String,
    enum: ["dog", "cat"],
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: false
  },
  colors: [
    {
      type: String,
      required: true
    }
  ],
  needs: [
    {
      type: String,
      required: true
    }
  ],
  description: {
    type: String,
    required: true
  },
  vaccinations: [
    {
      type: String,
      required: true
    }
  ],
  spayed: {
    type: Boolean,
    required: true
  },
  pictures: [
    {
      type: String,
      required: true
    }
  ],
  videos: [
    {
      type: String,
      required: true
    }
  ]
});

module.exports = mongoose.model("Animal", AnimalSchema);
