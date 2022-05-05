const EventModel = require("../Models/EventModel");

const getAllEvents = async (req, res) => {
  const { page } = req.query;

  const pageNumber = Number(page);
  const size = 8;
  let events;

  try {
    if (pageNumber === 1) {
      events = await EventModel.find()
        .limit(size)
        .sort({ createdAt: -1 })
    } else {
      const skips = size * (pageNumber - 1);
      events = await EventModel.find()
        .skip(skips)
        .limit(size)
        .sort({ createdAt: -1 })
    }
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getAllEvents in Controllers");
  }
};

module.exports = { getAllEvents };
