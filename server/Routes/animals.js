const router = require("express").Router();

const {getAnimals, getDisplayAnimals, getAllAnimals, oneAni} = require("../Controllers/Animals")
const {addAnimal, removeAnimal} = require("../Controllers/Admin");

router.route("/adoption").get(getAllAnimals)
router.route("/oneAni").get(oneAni);
router.route("/admin").post(addAnimal).delete(removeAnimal)
router.route("/").get(getDisplayAnimals);

module.exports = router;