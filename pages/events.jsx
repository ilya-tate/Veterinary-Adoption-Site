import { React, useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";

const event = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "",
    date: "",
    description: "",
    location: "",
    purpose: "",
  });
  const [show, setShow] = useState(false);
  const [sucessful, setSucessful] = useState(false);

  const [trash, setTrash] = useState(false);
  const [del, setDel] = useState({});
  const [delId, setDelId] = useState("");
  const [events, setEvents] = useState([]);
  const [newDate, setNewDate] = useState(new Date());

  const getInfo = async () => {
    const { data } = await axios.get("/api/v1/events/event");
    setEvents(data);
  };

  useEffect(() => {
    getInfo();
    console.log(events);
  }, []);

  useEffect(() => {
    getInfo();
    setSucessful(false);
  }, [sucessful]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    // else if (name == "spayed") {
    //   setSpade(!spade);
    //   console.log(spade);
    //   setNewevent((prev) => ({ ...prev, [spayed]: spade }));
    // }
    setNewEvent((prev) => ({ ...prev, [name]: value }));
    console.log(newEvent.name);
  };

  const changeSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      setClicked(false);
    }, 1500);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    setSucessful(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // let picUrl;

    // if (media) {
    // const formData = new FormData();
    // formData.append("image", media, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    console.log(newEvent);
    const res = await axios.post("/api/v1/events/admin", { ...newEvent, createdAt: Date.now() });
    console.log(res);
    setSucessful(true);
    // }
  };

  const chooseDrop = async (e) => {
    console.log("DROP");
    // const {data} = await axios.get("/api/v1/events/oneAni", e.target.value)
    setDel(events.find((event) => e.target.value.toString() == event.title));
    console.log(del.date);
    setNewDate(del.date);
    console.log(newDate, "newDate");
  };

  const deleteEvent = async () => {
    await axios.delete(`/api/v1/events/admin/${delId}`);
    setSucessful(true);
    setShow(false);
  };

  return (
    <div className="eventMain">
      <form className="createEvent" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Event Name..."
          className="eventName eventInputs"
          onChange={handleChange}
          value={newEvent.title}
        />
        <input
          type="date"
          name="date"
          className="eventDate eventInputs"
          onChange={(e) => {
            handleChange(e);
          }}
          value={newEvent.date}
        />
        <input
          type="time"
          name="time"
          className="eventTime eventInputs"
          onChange={(e) => {
            handleChange(e);
          }}
          value={newEvent.time}
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location..."
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.location}
        ></input>
        <input
          type="text"
          name="purpose"
          placeholder="Purpose Of Event..."
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.purpose}
        />
        <textarea
          rows="5"
          type="text"
          name="description"
          placeholder="Event Description..."
          className="eventInputs"
          onChange={handleChange}
          value={newEvent.description}
        />
        <br />
        <button
          type="submit"
          onClick={() => {
            setClicked(true);
            changeSubmit();
            getInfo();
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
        <p className="help">
          What To Put For Location
          <a href="https://docs.google.com/presentation/d/1RgojzIgqlQjeovyOV87aEkhmxRbwLfi2Uv0IeKbXyIY/edit#slide=id.g1272d95724a_0_5">
            <Icon className="helpIcon" name="help circle" />
          </a>
        </p>
      </form>

      {/*
            Remove event and Create event barrier so that I can see the difference
          */}

      <div className="removeEvent">
        <label htmlFor="events">
          Events:
          <select
            name="events"
            onChange={(e) => {
              chooseDrop(e);
              setDelId(
                e.target.children[e.target.selectedIndex].getAttribute("id")
              );
              setShow(false);
              console.log("hi");
            }}
          >
            <option value=""></option>
            {events.map((event) => {
              return (
                <option id={event._id} value={event.title}>
                  {event.title}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <br />
        {!show && (
          <button
            onClick={() => {
              getInfo();
              setShow(true);
              {
                setTimeout(() => {
                  console.log("DEL", del);
                }, 2000);
              }
            }}
            className="findAni"
          >
            Find event
          </button>
        )}
        {show && del !== "" && (
          <div className="delDiv">
            {del.location ? (
              <iframe
                src={del.location}
                allowFullScreen=""
                loading="fast"
                className="map"
              ></iframe>
            ) : <iframe className="map"></iframe>}
            <div className="delBot">
              {del.title ? (
                <h1 className="delName">
                  {console.log(newDate)}
                  {del.title} <br />
                  {
                    // newDate.getMonth().toString().padStart(2, "0") +
                    //   "/" +
                    //   newDate.getDate().toString().padStart(2, "0") +
                    //   "/" +
                    //   newDate.getFullYear()
                    del.date && del.date.split("T")[0]
                  }
                  {del.time}
                </h1>
              ) : (
                <h1 className="delName"></h1>
              )}
              <button
                className="delete"
                onMouseEnter={() => setTrash(true)}
                onMouseLeave={() => setTrash(false)}
                onClick={() => {
                  deleteEvent();
                  getInfo();
                }}
              >
                <Icon
                  name={trash ? "trash alternate outline" : "trash"}
                  color="red"
                  onClick={() => setShow(false)}
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default event;
