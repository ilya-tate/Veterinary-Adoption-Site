const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      res.status(401).send("Unauthorized");
    }

    const token = req.headers.authorization.split(" ")[1];
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = userId;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error on Auth Middleware");
  }
};

module.exports = { auth };
