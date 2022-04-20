const router = require("express").Router();

const {getAnimals, getDisplayAnimals} = require("../Controllers/Animals")
const {addAnimal, removeAnimal} = require("../Controllers/Admin");

router.route("/adoption").get(getAnimals)
router.route("/admin").post(addAnimal).delete(removeAnimal)
router.route("/").get(getDisplayAnimals);

module.exports = router;