const { createUser, postUserLogin } = require("../Controllers/user");

const router = require("express").Router();




router.route("/signup").post(createUser);
router.route("/login").post(postUserLogin);


module.exports = router;
