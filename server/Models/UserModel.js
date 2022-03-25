const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["student", "teacher"],
      default: "student",
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    admin: {
      type: Boolean,
      required: true,
      default: false
    },
    resetToken: { type: String },
    expireToken: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
