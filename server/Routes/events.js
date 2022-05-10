const router = require("express").Router();

const {getAllEvents} = require("../Controllers/Event")
const {createEvent, deleteEvent} = require("../Controllers/Admin");

router.route("/event").get(getAllEvents)
router.route("/admin").post(createEvent);
router.route('/admin/:id').delete(deleteEvent);

module.exports = router;