const animalModel = require("../Models/AnimalModel");

const addAnimal = async(req, res) => {
  const params = req.body;
  try{
    const newAnimal = await new animalModel({params}).save();
    const animalAdded = await animalModel.findById(animal._id).populate("animal");
    console.log("NEW ANIMAL");
    return res.status(200).json(animalAdded);
  }catch(err){
    res.status(500).send(`ERROR ${err}`)
  }
}

const getAnimals = async(req, res) => {
  //will get all animals and will have filters
}

module.exports = {addAnimal, getAnimals};