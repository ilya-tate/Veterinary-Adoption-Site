const AnimalModel = require("../Models/AnimalModel");

const oneAni = async (req, res) => {
  const { params } = req.body;
  try {
    const theOne = await AnimalModel.findOne({ params });
    return res.status(200).json(theOne);
  } catch (err) {
    console.log(err);
  }
};

const getAllAnimals = async (req, res) => {
  const { page } = req.query;

  const pageNumber = Number(page);
  const size = 8;
  let animals;

  try {
    if (pageNumber === 1) {
      animals = await AnimalModel.find()
        .limit(size)
        .sort({ createdAt: -1 })
    } else {
      const skips = size * (pageNumber - 1);
      animals = await AnimalModel.find()
        .skip(skips)
        .limit(size)
        .sort({ createdAt: -1 })
    }
    return res.status(200).json(animals);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAllAnimals in Controllers");
  }
};

const getDisplayAnimals = async (req, res) => {
  const size = 3;

  try {
    let animals = await AnimalModel.find()
      .limit(size)
      .sort({ createdAt: -1 })
      console.log("ANIMALS ANIMALS ANIMALS", animals);
    return res.status(200).json(animals);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getDisplayAnimals");
  }
};

const getAnimalById = async (req, res) => {
  try {
    const animal = await AnimalModel.findById(req.params.postId).populate(
      "animals"
    );
    if (!animal) return res.status(403).send("Animal Not Found");

    return res.status(200).json(animal);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAnimalById in Controllers");
  }
};

module.exports = { getDisplayAnimals, getAllAnimals, oneAni };
