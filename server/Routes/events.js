const router = require("express").Router();

const {getDisplayEvents} = require("../Controllers/Event")
const {createEvent, deleteEvent} = require("../Controllers/Admin");

router.route("/").get(getDisplayEvents)
router.route("/admin").post(createEvent);
router.route('/admin/:id').delete(deleteEvent);

module.exports = router;