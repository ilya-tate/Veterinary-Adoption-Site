const router = require("express").Router();

const {getAllEvents} = require("../Controllers/Event")
const {createEvent, deleteEvent, clearEVENTS} = require("../Controllers/Admin");

router.route("/").get(getAllEvents).delete(clearEVENTS)
router.route("/admin").post(createEvent);
router.route('/admin/:id').delete(deleteEvent);

module.exports = router;