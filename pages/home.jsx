import { React, useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import { Divider, Icon } from "semantic-ui-react";
import moment from "moment";
import Layout from "../components/layout/Layout";

const images = [
  "/bulldog.jfif",
  "/labpuppy.jfif",
  "/bullmastiff.jfif",
  "/germanpuppy.jfif",
  "/mastiffpuppy.jfif",
];

const home = ({ darkmode, setDarkmode, animalData }) => {
  const [image, setImage] = useState();
  const [random, setRandom] = useState(0);
  const [time, setTime] = useState(3500);
  const [clicked, setClicked] = useState(false);
  // const [weekAnimals, setWeekAnimals] = useState(animalData);
  // const [closeEvent, setCloseEvent] = useState(eventData);
  const [closeEvent, setCloseEvent] = useState({
    name: "Puppys For Adoption",
    date: "April 21st 2011",
    time: "12:00",
    description: "We will be raising awareness for needed pup adoption!",
    // location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.6709250553095!2d-112.29502798479852!3d33.535940480749616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b4104080e38d9%3A0x1fbd2919e78fa444!2sWest-MEC%20Central%20Campus!5e0!3m2!1sen!2sus!4v1649887047634!5m2!1sen!2sus"
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.8532380505817!2d-112.50740558506138!3d33.453129956510914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b49e6fadf8ec9%3A0xea15410e8a26a30c!2sWest-MEC%20Southwest%20Campus!5e0!3m2!1sen!2sus!4v1649887826290!5m2!1sen!2sus",
  });
  const [weekAnimals, setWeekAnimals] = useState([
    {
      name: "Jimmy",
      age: 50,
      animal: "Dog",
      breed: "German Shepard",
      image: "/bulldog.jfif",
    },
    {
      name: "Timmy",
      age: 50,
      animal: "Cat",
      breed: "Siamese",
      image: "mastiffpuppy.jfif",
    },
    {
      name: "Ton",
      age: 50,
      animal: "Dragon",
      breed: "Fire",
      image: "/germanpuppy.jfif",
    },
  ]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setImage(images[Math.floor(Math.random() * 5)]);
    }, 1);
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * 5)]);
    }, time);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const changePages = () => {
    setTimeout(() => {
      window.location.replace("/adoption");
    }, 2000);
  };

  return (
    <>
    <Layout darkmode={darkmode} setDarkmode={setDarkmode}>
      <div
        className="homeDiv"
        style={
          darkmode
            ? {
                background:
                  "linear-gradient(rgba(73, 72, 72), rgba(63, 63, 63), black)",
                width: "100vw",
                // marginLeft: "vw",
              }
            : {
                background: "white",
                width: "100vw",
                // marginLeft: "-26.6vw",
              }
        }
      >
        {/* <Head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossOrigin=""/>
      </Head> */}
        <div
          className="main"
          style={{
            height: "100vh",
            width: "100vw",
            display: "inline-flex",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "11.7%",
            height: "91vh",
            marginTop: "7vh",
            background: "rgba(200, 200, 200, .1)",
          }}
        >
          <div
            className="mainContent"
            style={
              darkmode
                ? {
                    background: "rgba(211, 211, 211, .2)",
                    width: "100%",
                    display: "inline-flex",
                    border: "2px solid black",
                    height: "91vh",
                    color: "white",
                  }
                : {
                    background: "rgba(200, 205, 206, 0.1)",
                    width: "100%",
                    color: "black",
                    display: "inline-flex",
                    border: "2px solid black",
                    height: "91vh",
                  }
            }
          >
            <div
              style={
                darkmode
                  ? {
                      width: "40vw",
                      minWidth: "40vw",
                      background: "rgb(205,112,0)",
                    }
                  : { width: "40vw", minWidth: "40vw", background: "orange" }
              }
            >
              <img
                src={image}
                onMouseOver={() => {
                  // setTime(100000000000000000000000);
                }}
                onMouseLeave={() => {
                  // setTime(3500);
                }}
                id="img"
                style={{
                  height: "90%",
                  marginTop: "5%",
                  minWidth: "30vw",
                  width: "37vw",
                  // marginLeft: "-1vw",
                  borderRadius: "36px",
                }}
                className="homeAni"
              />
            </div>
            <div style={{ marginLeft: ".5%" }}>
              <h1 className="homeHeader" style={{ fontSize: "60px" }}>
                West-Mec Veterinary Adoptions
              </h1>
              <br />
              <p style={{ fontSize: "35px" }}>
                Labore elit adipisicing quis voluptate veniam ullamco. Deserunt
                cupidatat laboris eu quis incididunt. Incididunt duis labore
                cupidatat irure ad excepteur. Id amet commodo ea adipisicing
                aute velit ut consectetur ad esse. Commodo nulla duis eiusmod ex
                laborum. This is good because good and goose is good goose. nice
                goose bruce obtuse.
              </p>
              <br />
              <button
                onClick={() => {
                  setClicked(true);
                  changePages();
                }}
                className={clicked ? "clickedAdopt" : "homeAdopt"}
                style={
                  clicked
                    ? {}
                    : darkmode
                    ? {
                        border: "2px solid black",
                        background: "orange",
                        color: "white",
                      }
                    : {
                        border: "2px solid black",
                        background: "orangered",
                        color: "white",
                      }
                }
              >
                {clicked ? "✔" : "Adopt Today"}
              </button>
            </div>
          </div>
        </div>
        <div
          className="galleryName"
          style={
            darkmode
              ? {
                  width: "100vw",
                  background: "orangered",
                  height: "20vh",
                  color: "white",
                  textAlign: "center",
                  border: "2px solid black",
                }
              : {
                  width: "100vw",
                  background: "orange",
                  height: "20vh",
                  color: "white",
                  textAlign: "center",
                  border: "2px solid black",
                }
          }
        >
          <h1 style={{ fontSize: "80px", marginTop: "10px" }}>
            Animals of the Week
          </h1>
        </div>
        <div
          className="gallery"
          style={
            darkmode
              ? {
                  height: "91vh",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  width: "100vw",
                  display: "inline-flex",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(211, 211, 211, .2)",
                  // border: "2px solid rgba(255, 255, 255, .8)",
                }
              : {
                  height: "91vh",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  width: "100vw",
                  display: "inline-flex",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(211, 211, 211, .2)",
                  border: "2px solid rgba(0, 0, 0, .8)",
                }
          }
        >
          {!weekAnimals ? (
            <h1 className="noAnimalsErr">THERE ARE NO ANIMALS THIS WEEK</h1>
          ) : (
            weekAnimals.map((animal) => (
              <div
                className="animal3 animalBanner"
                style={
                  darkmode
                    ? {
                        color: "whitesmoke",
                        width: "30%",
                        marginLeft: "2%",
                        border: "4px solid black",
                      }
                    : {
                        color: "whitesmoke",
                        width: "30%",
                        marginLeft: "2%",
                        border: "4px solid black",
                      }
                }
              >
                <img
                  src={animal.image}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
                <h1 className="name" style={{ marginTop: "-27%" }}>
                  {animal.name}
                </h1>
                <div className="text">
                  <p className="age">{animal.age} -</p>{" "}
                  <p className="breed">
                    {animal.animal}({animal.breed})
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div
          className="comingEvent"
          style={
            darkmode
              ? {
                  width: "100vw",
                  background: "orangered",
                  height: "20vh",
                  color: "white",
                  textAlign: "center",
                  border: "2px solid black",
                  verticalAlign: "center",
                }
              : {
                  width: "100vw",
                  background: "orange",
                  height: "20vh",
                  color: "white",
                  textAlign: "center",
                  border: "2px solid black",
                  verticalAlign: "center",
                }
          }
        >
          <h1 style={{ fontSize: "80px", marginTop: "10px" }}>
            Upcoming Event
          </h1>
        </div>
        <div
          className="events"
          style={
            darkmode
              ? {
                  height: "91vh",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  width: "100vw",
                  display: "inline-flex",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(211, 211, 211, .2)",
                  // border: "2px solid rgba(255, 255, 255, .8)",
                }
              : {
                  height: "91vh",
                  paddingBottom: "30px",
                  width: "100vw",
                  display: "inline-flex",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "rgba(211, 211, 211, .2)",
                  border: "2px solid rgba(0, 0, 0, .8)",
                }
          }
        >
          <div
            className="event"
            style={{ display: "inline-flex", marginTop: "8%" }}
          >
            <div
              className="eventDesc"
              style={
                darkmode
                  ? {
                      background: "black",
                      color: "whitesmoke",
                      width: "23.5vw",
                      height: "55vh",
                      fontSize: "25px",
                    }
                  : {
                      background: "rgb(220, 220, 220)",
                      color: "black",
                      width: "23.5vw",
                      height: "55vh",
                      fontSize: "25px",
                      border: "2px solid black",
                    }
              }
            >
              <h1 style={{ marginTop: "15px" }}>{closeEvent.name}</h1>
              <br />
              <p>
                {closeEvent.date}-{closeEvent.time}
              </p>
              <br />
              <p>{closeEvent.description}</p>
            </div>
            <div
              className="eventMap"
              style={{
                width: "45vw",
                height: "55vh",
                border: "2px solid black",
                background: "orange",
              }}
            >
              <iframe
                src={closeEvent.location}
                style={
                  !darkmode
                    ? { width: "45vw", height: "54vh", border: 0 }
                    : {
                        filter: "invert(100%)",
                        width: "45vw",
                        height: "54vh",
                        border: 0,
                      }
                }
                allowFullScreen=""
                loading="lazy"
                className="map"
              ></iframe>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", bottom: "0", marginTop: "-2vh" }}>
          <Divider
            style={{
              backgroundColor: "orangered",
              color: "red",
              height: "10px",
              paddingBottom: "0",
              marginBottom: "0",
              marginBottom: "10px",
            }}
          />
          <Footer
            darkmode={darkmode}
            className="footer"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "100vw",
              height: "23vh",
            }}
          ></Footer>
        </div>
      </div>
      </Layout>
    </>
  );
};

home.getInitialProps = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/v1/animals`);
    const res2 = await axios.get(`${baseURL}/api/v1/events`);

    return { animalData: res.data, eventData: res2.data };
  } catch (error) {
    console.log(error);
    console.log("RUH ROH RAGGY");
    return { errorLoading: true };
  }
};

export default home;
