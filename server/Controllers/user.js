const UserModel = require("../Models/UserModel");
const defaultProfilePic = require("../util/defaultProfilePic");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body.user;

  try {
    let user;
    user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user) return res.status(401).send("Email already in use");

    user = new UserModel({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password,
      role,
      profilePicURL: req.bdy.profilePicURL || defaultProfilePic,
    });
    user.password = await bcrypt.hash(password, 10);
    user = await user.save();
  } catch (error) {
    console.log(error);
  }
};

const postUserLogin = async (req, res) => {
  const { email, password } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");
  if (password.length < 6)
    return res.status(401).send("Password must be at least 6 characters long");

  try {
    const user = await UserModel.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!user) return res.status(401).send("Invalid Credentials");

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) return res.status(401).send("Invalid Credentials");

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};

module.exports = { createUser, postUserLogin };
