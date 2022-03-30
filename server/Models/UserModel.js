const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["student", "teacher", "visitor"],
      default: "visitor",
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
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
