const AnimalModel = require("../Models/AnimalModel");
const EventModel = require("../Models/EventModel")

const addAnimal = async (req, res) => {
  const params = req.body;
  console.log(params);
  console.log("Creating");
  try {
    console.log("Creating.");
    const newAni = new AnimalModel({...params})
    await newAni.save();
    console.log("Creating..", newAni);
    // const animalAdded = await AnimalModel.findById("626afc8650b83124e5b1c5f2")
      //dont add populate because no reference
    console.log("NEW ANIMAL");
    // return res.status(200).json(animalAdded);
  } catch (err) {
    res.status(500).send(`ERROR`);
  }
};

const removeAnimal = async (req, res) => {
  try {
    // const { userId } = req;
    console.log("ID", req.params);

    const animalFound = await AnimalModel.findById(req.params.id);
    console.log(animalFound);
    const animal = await AnimalModel.findByIdAndDelete(req.params.id);

    if (!animalFound) return res.status(403).send("Animal not found");

    // const user = await UserModel.findById(userId);
    // if (user.role === "teacher" || user.role === "student") {
    //   await animal.remove();
    //   return res.status(200).send("Animal removed successfully");
    // } else if (user.role !== "teacher" && user.role !== "student") {
    //   return res.status(401).send("Unauthorized");
    // }
    
    return res.status(200).send("Animal removed successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ removeAnimal");
  }
};

const createEvent = async (req, res) => {
  const body = req.body;
  console.log(body);
  console.log("CREATING EVENT");
  try {
    console.log("CREATING EVENT.");
    const newEvent = new EventModel({...body});
    await newEvent.save()
    console.log("Creating EVENT..");
    // const animalAdded = await AnimalModel.findById("626afc8650b83124e5b1c5f2")
      //dont add populate because no reference
    console.log("CREATING EVENT...", newEvent);
    // return res.status(200).json(animalAdded);
  } catch (err) {
    res.status(500).send(`ERROR`);
  }
};

const deleteEvent = async (req, res) => {
  try {

    const eventFound = await EventModel.findById(req.params.id);
    console.log(eventFound, "ANIMALES FOUNDUS");
    const event = await EventModel.findByIdAndDelete(req.params.id);
    if (!eventFound) return res.status(403).send("This event is not in our records.");

    return res.status(200).send("Event deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ deleteEvent");
  }
};


module.exports = {addAnimal, removeAnimal, createEvent, deleteEvent}