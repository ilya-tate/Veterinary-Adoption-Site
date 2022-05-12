const router = require("express").Router();

const {getAllAnimals, getDisplayAnimals} = require("../Controllers/Animals")
const {addAnimal, removeAnimal} = require("../Controllers/Admin");

router.route("/adoption").get(getAllAnimals)
router.route("/admin").post(addAnimal).delete(removeAnimal)
router.route("/").get(getDisplayAnimals);

module.exports = router;