const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String, 
    enum: ["student", "teacher"],
    default: "student",
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  resetToken: { type: String},
  expireToken: { type: String},
},
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema)