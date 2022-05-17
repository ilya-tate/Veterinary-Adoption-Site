const router = require("express").Router();

const {getDisplayAnimals, getAllAnimals, oneAni} = require("../Controllers/Animals")
const {addAnimal, removeAnimal, clearANI} = require("../Controllers/Admin");
const {uploadAnimalPic} = require("../Controllers/uploadAnimalPics");

router.route("/adoption").get(getAllAnimals)
router.route("/oneAni").get(oneAni);
router.route("/admin").post(addAnimal)
router.route('/admin/:id').delete(removeAnimal)
router.route("/").get(getDisplayAnimals).delete(clearANI);
router.route("/upload").post(uploadAnimalPic);

module.exports = router;