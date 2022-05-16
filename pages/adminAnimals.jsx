import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import DragNDrop from "../components/common/DragNDrop";

const adminAnimal = () => {
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [spade, setSpade] = useState(false);
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
    spayed: false,
    pictures: "",
  });
  const [show, setShow] = useState(false);
  const [sucessful, setSucessful] = useState(false);
  const [trash, setTrash] = useState(false);
  const [del, setDel] = useState({});
  const [delId, setDelId] = useState("");
  const [animals, setAnimals] = useState([]);
  const [clearAll, setClearAll] = useState(false);
  const [preview, setPreview] = useState(null);
  const [media, setMedia] = useState(null);
  const inputRef = useRef(null);
  const [password, setPassword] = useState(99550);
  const [spayed, setSpayed] = useState(false);

  const chooseDrop = async (e) => {
    console.log("DROP");
    setDel(animals.find((animal) => e.target.value.toString() == animal.name));
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

  const getInfo = async () => {
    const { data } = await axios.get("/api/v1/animals/adoption");
    console.log(data);
    setAnimals(data);
  };

  const clear = async () => {
    const { data } = await axios.delete("/api/v1/animals/");
    console.log(data);
    setAnimals(data);
    getInfo()
  };

  const deleteAnimal = async () => {
    await axios.delete(`/api/v1/animals/admin/${delId}`);
    setSucessful(true);
    setShow(false);
  };

  useEffect(() => {
    getInfo();
    console.log(animals);
  }, []);

  useEffect(() => {
    getInfo();
    console.log(animals, "ANIMALES");
    setSucessful(false);
  }, [sucessful]);

  const handleChange = async (e) => {
    const { name, files, value } = e.target;
    let picUrl;
    if (name === "pictures") {
      setMedia(files[0]);
      setPreview(URL.createObjectURL(files[0]));
      const formData = new FormData();
      formData.append("image", files[0], {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = await axios.post("/api/v1/animals/upload", formData);
      picUrl = res.data.src;
      setNewAnimal((prev) => ({ ...prev, [name]: picUrl }));
    } else if (name === "spayed") {
      setSpayed(!spayed)
      setNewAnimal((prev) => ({ ...prev, [name]: spayed }));
      console.log(spayed, "SPAYED", newAnimal.spayed);
    } else {
      setNewAnimal((prev) => ({ ...prev, [name]: value }));
    }

    // else if (name == "spayed") {
    //   setSpade(!spade);
    //   console.log(spade);
    //   setNewAnimal((prev) => ({ ...prev, [spayed]: spade }));
    // }
  };

  const handleSubmit = async (e) => {
    const { name, files, value } = e.target;
    e.preventDefault();
    // setLoading(true);
    // let picUrl;
    // setTimeout(() => {
    //   console.log("wait 2s");
    // }, 2000);
    const res = await axios.post("/api/v1/animals/admin", { ...newAnimal });
    // }
  };

  return (
    <div className="animalMain">
      <DragNDrop
        inputRef={inputRef}
        handleChange={handleChange}
        preview={preview}
        setPreview={setPreview}
      />
      <form className="createAnimal" onSubmit={handleSubmit}>
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
          name="vaccines"
          placeholder="Vaccines..."
          className="animalVaccines animalInputs"
          onChange={handleChange}
          value={newAnimal.vaccinations}
        />
        <div className="spadeDiv">
          <p className="spade">Spayed?</p>
          <input
            type="checkbox"
            name="spayed"
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
      </form>

      {/*
            Remove Animal and Create Animal barrier so that I can see the difference
          */}

      <div className="removeAnimals">
        <label htmlFor="animals">
          Animals
          <select
            name="animals"
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
            {animals.length ? animals.map((animal) => {
              return (
                <option id={animal._id} value={animal.name}>
                  {animal.name}
                </option>
              );
            }) : ""}
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
            Find Animal
          </button>
        )}
        {show && del !== "" && (
          <div className="delDiv">
            <img
              src={del.pictures[0]}
              alt="fff"
              className="delImg"
              onClick={console.log(del)}
            />
            <div className="delBot">
              {del.name ? (
                <h1 className="delName">
                  {del.name} - {del.age}
                </h1>
              ) : (
                <h1 className="delName"></h1>
              )}
              <button
                className="delete"
                onMouseEnter={() => setTrash(true)}
                onMouseLeave={() => setTrash(false)}
                onClick={() => {
                  deleteAnimal();
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
        <br />
        <a
          className="clear"
          onClick={() => {
            setClearAll(true)
            console.log("CLEAR...SUCCESSFUL");
          }}
        >
          {!clearAll && <p>Clear All?</p>}
          {clearAll && <input type="number" placeholder="Enter Password" onBlur={(e)=>{
            password === e.target.value && clearAll(false), clear(), setTimeout(()=>{window.location.replace("/animals")}, 100)
          }}></input>}
        </a>
      </div>
    </div>
  );
};

export default adminAnimal;
