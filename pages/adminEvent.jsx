import { React, useState } from "react";

const event = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "",
    date: Date.now(),
    description: "",
    location: "",
    purpose: "",
  });
  // const [name, setName] = useState("")
  // const [name, setName] = useState("")
  // const [name, setName] = useState("")

  const changeSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      setClicked(false)
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    } else if (name === "spade") {
      setSpade(!spade);
      console.log(spade);
    }
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = await axios.post("/api/v1/events/admin", formData);
      picUrl = res.data.src;
    }

    await submitNewevent(
      newevent.name,
      newevent.age,
      newevent.gender,
      newevent.event,
      newevent.breed,
      newevent.colors,
      newevent.needs,
      newevent.details,
      newevent.description,
      newevent.vaccines,
      newevent.spade,
      picUrl,
      newevent,
      setNewevent,
      setError
    );

    console.log("submitted");

    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return (
    <div className="eventMain">
      <div className="createEvent" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="eventName eventInputs"
          onChange={handleChange}
          value={newEvent.name}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender..."
          className="eventGender eventInputs"
          onChange={handleChange}
          value={newEvent.gender}
        />
        <input
          type="number"
          name="age"
          placeholder="Age..."
          className="age eventInputs"
          onChange={handleChange}
          value={newEvent.age}
        />
        <input
          type="text"
          name="event"
          placeholder="event Type..."
          className="eventType eventInputs"
          onChange={handleChange}
          value={newEvent.event}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed..."
          className="eventBreed eventInputs"
          onChange={handleChange}
          value={newEvent.breed}
        />
        <input
          type="text"
          name="colors"
          placeholder="Colors..."
          className="eventColors eventInputs"
          onChange={handleChange}
          value={newEvent.colors}
        />
        <input
          type="text"
          name="needs"
          placeholder="Needs..."
          className="eventNeeds eventInputs"
          onChange={handleChange}
          value={newEvent.needs}
        />
        <input
          type="text"
          name="details"
          placeholder="Details..."
          className="eventDetails eventInputs"
          onChange={handleChange}
          value={newEvent.details}
        />
        <input
          type="text"
          name="description"
          placeholder="Description..."
          className="eventDesc eventInputs"
          onChange={handleChange}
          value={newEvent.description}
        />
        <input
          type="text"
          name="Vaccination"
          placeholder="Vaccines..."
          className="eventVaccines eventInputs"
          onChange={handleChange}
          value={newEvent.vaccinations}
        />
        <div className="spadeDiv">
          <p className="spade">Spade?</p>
          <input
            type="checkbox"
            name="Spade"
            className="eventSpade eventInputs"
            onChange={handleChange}
            value={newEvent.spade}
          />
        </div>
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
          {clicked ? "" : submitted ? "✔" : "Submit?"}
        </button>
      </div>
    </div>
  );
};

export default event;
