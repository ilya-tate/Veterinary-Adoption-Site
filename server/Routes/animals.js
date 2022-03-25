const router = require("express").Router();

const {getAnimals, addAnimal} = require("../Controllers/Animals")

router.route("/adoption").get(getAnimals).post(addAnimal);

module.exports = router;