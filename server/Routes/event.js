const router = require("express").Router();

const {getEvent, createEvent} = require("../Controllers/Animals")

router.route("/events").get(getEvent).post(createEvent);

module.exports = router;