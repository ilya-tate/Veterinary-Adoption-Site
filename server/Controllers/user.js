const UserModel = require('../Models/UserModel')
const bcrypt = require("bcryptjs");


const createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    role

  } = req.body.user


  try{

    let user
    user = await UserModel.findOne({ email: email.toLowerCase() })
    if (user) return res.status(401).send("Email already in use");

    user = new UserModel({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password,
      role

    })
    user.password = await bcrypt.hash(password, 10);
    user = await user.save();

  } catch (error){
    console.log(error);
  }
}

module.exports = {createUser}