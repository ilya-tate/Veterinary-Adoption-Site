const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String, 
    required: false,
  },
  place: {
    type: true,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  }
})