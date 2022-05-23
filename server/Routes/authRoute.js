const router = require("express").Router();

const { getUserAuth } = require("../Controllers/auth");
const { auth } = require("../middleware/auth");

router.route("/").get(auth, getUserAuth);

module.exports = router;
