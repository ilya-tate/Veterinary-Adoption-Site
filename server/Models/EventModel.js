const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  }
});

module.exports = Mongoose.model("Event", EventSchema);
