import { React, useState } from "react";

const events = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: "",
    time: "",
    date: Date.now(),
    location: "",
    description: "",
    purpose: "",
<<<<<<< HEAD
  });

  const [events, setEvents] = useState([
    {
      name: "Puppy Bath Time",
      time: "11:00",
      date: Date.now(),
      location: "random",
      description: "doesn't matter",
      purpose: "something",
      id: 1,
    },
    {
      name: "Puppy Bed Time",
      time: "11:00",
      date: Date.now(),
      location: "random",
      description: "doesn't matter",
      purpose: "something",
      id: 2,
    },
    {
      name: "Puppy Nap Time",
      time: "11:00",
      date: Date.now(),
      location: "random",
      description: "doesn't matter",
      purpose: "something",
      id: 3,
    },
    {
      name: "Puppy Food Time",
      time: "11:00",
      date: Date.now(),
      location: "random",
      description: "doesn't matter",
      purpose: "something",
      id: 4,
    },
  ]);

  const [foundEvent, setFoundEvent] = useState(0);

  const chooseDrop = (e) => {
    setFoundEvent(e.target.value);
    console.log(foundEvent);
  };
=======

  });
  // const [name, setName] = useState("")
  // const [name, setName] = useState("")
  // const [name, setName] = useState("")
>>>>>>> 7ab19181c367bbaca0dee91e1e1c28b6b5ca5f83

  const changeSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      setClicked(false)
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await submitNewEvent(
      newEvent.name,
      newEvent.time,
      newEvent.date,
      newEvent.location,
      newEvent.description,
      newEvent.purpose,
      newEvent,
      setNewEvent,
    );

    // const res = await axios.post("/api/v1/events/admin", formData);
  };

  return (
    <div className="eventMain">
      <div className="createEvent" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.name}
        />
        <input
          type="time"
          name="time"
          placeholder="Time"
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.time}
        />
        <input
          type="date"
          name="place"
          placeholder="Date"
          className="age eventInputs"
          onChange={handleChange}
          value={newEvent.date}
        />
        <input
          type="text"
          name="location (from maps)"
          placeholder="Location"
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.location}
        />
        <textarea
          rows="5"
          type="text"
          name="description"
          placeholder="Description"
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.description}
        />
        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.purpose}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            setClicked(true);
            changeSubmit();
          }}
          className={
            clicked
              ? "click submitted"
              : submitted
              ? "clickedButton submit"
              : "submit"
          }
        >
          {clicked ? "loading" : submitted ? "✔" : "Submit?"}
        </button>
        </div>

          {/*
            Remove Event and Create Event barrier so that I can see the difference
          */}
<<<<<<< HEAD
      <div className="removeEvent">
        <label htmlFor="events">
          Find Event To Delete: 
          <select name="events" onChange={chooseDrop}>
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button className="submit">Find Animal</button>
        {/* <br /> */}
        {/* <button
=======



      <div className="removeEvent">
          <input type="text" name="name" placeholder="name" className="eventInputs"/>
        <br />
        <button
>>>>>>> 7ab19181c367bbaca0dee91e1e1c28b6b5ca5f83
          type="button"
          onClick={() => {
            setClicked(true);
            changeSubmit();
          }}
          className={
            clicked
              ? "click submitted"
              : submitted
              ? "clickedButton submit"
              : "submit"
          }
        >
          {clicked ? "loading" : submitted ? "✔" : "Delete?"}
        </button>
<<<<<<< HEAD
        </div>*/}
    </div> 
    </div>
=======
      </div>
    </div>
      // </div>
>>>>>>> 7ab19181c367bbaca0dee91e1e1c28b6b5ca5f83
  );
};

export default events;
