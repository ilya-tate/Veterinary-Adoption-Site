const router = require("express").Router();

const {
    createUser,
    postUserLogin,
} = require("../Controllers/user");


router.route("/signup").post(createUser);
router.route("/login").post(postUserLogin);

module.exports = router;
