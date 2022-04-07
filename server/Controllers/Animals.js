const AnimalModel = require("../Models/AnimalModel");

const getAnimals = async(req, res) => {
  //will get all animals and will have filters
}

const getAllAnimals = async (req, res) => {
  const { page } = req.query;

  const pageNumber = Number(page);
  const size = 8;

  try {
    if (pageNumber === 1) {
      let animals = await AnimalModel.find()
        .limit(size)
        .sort({ createdAt: -1 })
        .populate("animal")
    } else {
      const skips = size * (pageNumber - 1);
      let animals = await AnimalModel.find()
        .skip(skips)
        .limit(size)
        .sort({ createdAt: -1 })
        .populate("animal")
    }
    return res.status(200).json(animals);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAllAnimals in Controllers");
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

module.exports = {addAnimal, getAnimals};