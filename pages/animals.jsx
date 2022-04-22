import { React, useState } from "react";
import { TextArea } from "semantic-ui-react";

const animal = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    age: 0,
    gender: "",
    animal: "",
    breed: "",
    colors: "",
    needs: "",
    details: "",
    description: "",
    vaccines: "",
    spade: false,
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
    } else if (name == "spayed") {
      setSpade(!spade);
      console.log(spade);
      setNewAnimal((prev) => ({ ...prev, [spade]: spade }));
    }
    setNewAnimal((prev) => ({ ...prev, [name]: value }));
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
      const res = await axios.post("/api/v1/animals/admin", formData);
      picUrl = res.data.src;
    }

    await submitNewAnimal(
      newAnimal.name,
      newAnimal.age,
      newAnimal.gender,
      newAnimal.animal,
      newAnimal.breed,
      newAnimal.colors,
      newAnimal.needs,
      newAnimal.details,
      newAnimal.description,
      newAnimal.vaccines,
      newAnimal.spade,
      picUrl,
      newAnimal,
      setNewAnimal,
      setError
    );

    console.log("submitted");

    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return (
    <div className="animalMain">
      <div className="createAnimal" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="animalName animalInputs"
          onChange={handleChange}
          value={newAnimal.name}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender..."
          className="animalGender animalInputs"
          onChange={handleChange}
          value={newAnimal.gender}
        />
        <input
          type="number"
          name="age"
          placeholder="Age..."
          className="age animalInputs"
          onChange={handleChange}
          value={newAnimal.age}
        />
        <input
          type="text"
          name="animal"
          placeholder="Animal Type..."
          className="animalType animalInputs"
          onChange={handleChange}
          value={newAnimal.animal}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed..."
          className="animalBreed animalInputs"
          onChange={handleChange}
          value={newAnimal.breed}
        />
        <input
          type="text"
          name="colors"
          placeholder="Colors..."
          className="animalColors animalInputs"
          onChange={handleChange}
          value={newAnimal.colors}
        />
        <input
          type="text"
          name="needs"
          placeholder="Needs..."
          className="animalNeeds animalInputs"
          onChange={handleChange}
          value={newAnimal.needs}
        />
        <input
          type="text"
          name="details"
          placeholder="Details..."
          className="animalDetails animalInputs"
          onChange={handleChange}
          value={newAnimal.details}
        />
        <textarea
          rows="5"
          type="text"
          name="description"
          placeholder="Description..."
          className="animalInputs"
          onChange={handleChange}
          value={newAnimal.description}
        />
        <input
          type="text"
          name="Vaccination"
          placeholder="Vaccines..."
          className="animalVaccines animalInputs"
          onChange={handleChange}
          value={newAnimal.vaccinations}
        />
        <div className="spadeDiv">
          <p className="spade">Spade?</p>
          <input
            type="checkbox"
            name="Spayed"
            className="animalSpade animalInputs"
            onChange={handleChange}
            value={newAnimal.spade}
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
          {clicked ? "loading" : submitted ? "✔" : "Submit?"}
        </button>
      </div>

          {/*
            Remove Animal and Create Animal barrier so that I can see the difference
          */}



      <div className="removeAnimals">
          <input type="text" name="name" placeholder="name" className="animalInputs removeAnimal"/>
        <br />
        <button
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
      </div>
    </div>
  );
};

export default animal;
