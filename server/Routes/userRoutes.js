const { createUser, postLoginUser } = require("../Controllers/user");

const router = require("express").Router();



router.route("/signup").post(createUser);
router.route("/login").post(postLoginUser);


module.exports = router;
