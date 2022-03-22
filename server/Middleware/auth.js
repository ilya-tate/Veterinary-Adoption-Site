const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).send("Unautorized");
    }
    if (!req.headers.authorization.split(" ")[0] === "Bearer") {
      return res.status(401).send("Unautorized");
    }

    const auth = req.headers.authorization.split(" ")[1];
    const { userId } = jwt.verify(auth, process.env.JWT_SECRET);

    req.userId = userId;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send("Unauthorized");
  }
};

module.exports = {authMiddleware}