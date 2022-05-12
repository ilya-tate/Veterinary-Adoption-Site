const AnimalModel = require("../Models/AnimalModel");

const getAllAnimals = async (req, res) => {
  try {
    console.log("hi");
    let animals = await AnimalModel.find({})
      .sort({ createdAt: -1 })
      console.log("bye");
    return res.status(200).json(animals);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getDisplayAnimals");
  }
};

const getDisplayAnimals = async (req, res) => {
  const size = 3;

  try {
    let animals = await AnimalModel.find()
      .limit(3)
      .sort({ createdAt: -1 })
      .populate("animal");
    return res.status(200).json(animals);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getDisplayAnimals");
  }
};

const getAnimalById = async (req, res) => {
  try {
    const animal = await AnimalModel.findById(req.params.postId)
      .populate("animals")
    if (!animal) return res.status(403).send("Animal Not Found");

    return res.status(200).json(animal);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAnimalById in Controllers");
  }
};

module.exports = {getDisplayAnimals, getAllAnimals};