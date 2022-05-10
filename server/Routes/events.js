const router = require("express").Router();

const {getDisplayEvents} = require("../Controllers/Event")

router.route("/").get(getDisplayEvents)

module.exports = router;