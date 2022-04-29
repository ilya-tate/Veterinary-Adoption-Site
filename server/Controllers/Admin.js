const animalModel = require("../Models/AnimalModel")

const addAnimal = async (req, res) => {
  const params = req.body;
  console.log(params);
  console.log("Creating");
  try {
    console.log("Creating.");
    const newAni = await new animalModel({...params}).save();
    console.log("Creating..", newAni);
    const animalAdded = await animalModel.findById("626afc8650b83124e5b1c5f2")
      //dont add populate because no reference
    console.log("NEW ANIMAL");
    return res.status(200).json(animalAdded);
  } catch (err) {
    res.status(500).send(`ERROR`);
  }
};

const removeAnimal = async (req, res) => {
  try {
    const { userId } = req;
    const { animalId } = req.params;

    const animal = await PostModel.findById(animalId);

    if (!animal) return res.status(403).send("Animal not found");

    const user = await UserModel.findById(userId);
    if (user.role === "teacher" || user.role === "student") {
      await animal.remove();
      return res.status(200).send("Animal removed successfully");
    } else if (user.role !== "teacher" && user.role !== "student") {
      return res.status(401).send("Unauthorized");
    }

    await animal.remove();
    return res.status(200).send("Post deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ deletePost");
  }
};

const createEvent = async (req, res) => {
  const params = req.body;
  try {
    const newEvent = await new eventModel({ params }).save();
    const eventAdded = await eventModel.findById(animal._id).populate("event");
    console.log("NEW EVENT");
    return res.status(200).json(eventAdded);
  } catch (err) {
    res.status(500).send(`ERROR ${err}`);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { userId } = req;
    const { animalId } = req.params;

    const animal = await PostModel.findById(animalId);

    if (!animal) return res.status(403).send("Animal not found");

    const user = await UserModel.findById(userId);
    if (user.role === "teacher" || user.role === "student") {
      await animal.remove();
      return res.status(200).send("Animal removed successfully");
    } else if (user.role !== "teacher" && user.role !== "student") {
      return res.status(401).send("Unauthorized");
    }

    await animal.remove();
    return res.status(200).send("Post deleted successfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ deletePost");
  }
};


module.exports = {addAnimal, removeAnimal, createEvent, deleteEvent}