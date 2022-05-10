const EventModel = require("../Models/EventModel")

const getDisplayAnimals = async (req, res) => {
  const size = 3;

  try {
    let events = await EventModel.find()
      .limit(3)
      .sort({ createdAt: -1 })
      .populate("animal");
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getDisplayAnimals");
  }
};