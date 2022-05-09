const router = require("express").Router();

const {getDisplayAnimals, getAllAnimals, oneAni} = require("../Controllers/Animals")
const {addAnimal, removeAnimal} = require("../Controllers/Admin");

router.route("/adoption").get(getAllAnimals)
router.route("/oneAni").get(oneAni);
router.route("/admin").post(addAnimal)
router.route('/admin/:id').delete(removeAnimal)
router.route("/").get(getDisplayAnimals);

module.exports = router;