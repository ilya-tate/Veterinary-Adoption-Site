const { createUser } = require("../Controllers/user");

const router = require("express").Router();



router.route("/signup").post(createUser);


module.exports = router;
