import { React, useState, useEffect, useRef} from "react";
import Nav from "./components/layout/Nav";
import { Form } from "semantic-ui-react";

const adoption = () => {
  const [filter, setFilter] = useState([]);
  const inputRef = useRef();

  const [media, setMedia] = useState(null)


  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    setFilter((prev) => ({ ...prev, [name]: value }));
  };


  useEffect(() => {
    // axios.get("/", {});
  }, [filter]);

  return (
    <div className="adoption" style={{display: "inline"}}>
      <Nav />
      <div className="adoptionMain">
        <div className="filters">
          <Form>
            <Form.Input
            style={{width: "20%"}}
              required
              label="name"
              placeholder="Name"
              value={filter}
              onChange={handleChange}
              name="name"
            />
            <Form.Input
            style={{width: "20%"}}
              required
              label="age"
              placeholder="Age"
              value={filter}
              onChange={handleChange}
              name="age"
            />
            <Form.Input
              required
              label="breed"
              placeholder="Breed"
              value={filter}
              onChange={handleChange}
              name="breed"
            />
            <Form.Input
              required
              label="animal"
              placeholder="Animal"
              value={filter}
              onChange={handleChange}
              name="animal"
            />
            <Form.Input
              required
              label="background"
              placeholder="Background"
              value={filter}
              onChange={handleChange}
              name="background"
            />
            <Form.Input
              required
              label="color"
              placeholder="Color"
              value={filter}
              onChange={handleChange}
              name="color"
            />
            <Form.Input
              required
              label="needs"
              placeholder="Needs"
              value={filter}
              onChange={handleChange}
              name="needs"
            />
            <Form.Input
              required
              label="description"
              placeholder="Description"
              value={filter}
              onChange={handleChange}
              name="description"
            />
            <Form.Input
              required
              label="vaccination"
              placeholder="Vaccines"
              value={filter}
              onChange={handleChange}
              name="vaccinations"
            />
            <Form.Input
              required
              label="spayed"
              placeholder="Spayed"
              value={filter}
              onChange={handleChange}
              name="spayed"
            />
          <input
            ref={inputRef}
            onChange={handleChange}
            name="images"
            style={{ display: "none" }}
            type="file"
            accept="image/*"
          />
          <input
            ref={inputRef}
            onChange={handleChange}
            name="videos"
            style={{ display: "none" }}
            type="file"
            accept="videos/*"
          />
          </Form>
        </div>
        <div className="adoption"></div>
      </div>
    </div>
  );
};

export default adoption;
