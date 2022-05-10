const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  purpose: {
    type: String,
  },
  createdAt: {
    type: Date,
    require: true
  }
});

module.exports = mongoose.model("Event", EventSchema);
