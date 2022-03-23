const { truncate } = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  animal: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  needs: [
    {
      type: String,
      required: true,
    },
  ],
  description: [
    {
      type: String,
      required: true,
    },
  ],
  vaccinations: [
    {
      type: String,
      required: true,
    },
  ],
  spade: {
    type: Boolean,
    required: true,
  },
  pictures: [
    {
      type: String,
      required: true,
    },
  ],
  videos: [
    {
      type: String,
      required: true,
    }
  ],
});
