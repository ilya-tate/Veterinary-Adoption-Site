const UserModel = require("../Models/UserModel");

const getUserAuth = async (req, res) => {
  const { userId } = req;

  if (!userId) return res.status(500).send("No User ID");
  try {
    const user = await UserModel.findById(userId);

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error in auth controller");
  }
};

module.exports = { getUserAuth };