import { React, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "./components/layout/Footer";
import { Divider, Icon } from "semantic-ui-react";
import Nav from "./components/layout/Nav";
import Map from "./components/maps/Map";
import { parseCookies } from "nookies";
import { baseURL } from "./util/auth";
import { changePages } from "./util/auth";

const images = [
  "/bulldog.jfif",
  "/labpuppy.jfif",
  "/bullmastiff.jfif",
  "/germanpuppy.jfif",
  "/mastiffpuppy.jfif",
];

const home = ({darkmode, setDarkmode}) => {
  const [image, setImage] = useState();
  const [random, setRandom] = useState(0);
  const [time, setTime] = useState(3500);
  const [background, setBackground] = useState("image");
  const [clicked, setClicked] = useState(false);

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
      <div
        className="homeDiv"
        style={
          darkmode
            ? {
                background:
                  "linear-gradient(rgba(73, 72, 72), rgba(63, 63, 63), black)",
                width: "100vw",
                // marginLeft: "-26.6vw",
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
                  : { width: "40vw",
                    minWidth: "40vw",
                    background: "orange" 
                  }
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
                West-MEC Veterinary Adoptions
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
          <div
            className="animal1 animalBanner"
            style={
              darkmode
                ? {
                    color: "whitesmoke",
                    width: "30%",
                    border: "4px solid black",
                  }
                : {
                    color: "whitesmoke",
                    width: "30%",
                    border: "4px solid black",
                  }
            }
          >
            <img
              src={images[0]}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <h1 className="name" style={{ marginTop: "-27%" }}>
              Henry
            </h1>
            <div className="text">
              <p className="age">5 Years -</p>
              <p className="breed">German Shepard</p>
            </div>
          </div>
          <div
            className="animal2 animalBanner"
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
              src={images[2]}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <h1 className="name" style={{ marginTop: "-27%" }}>
              Jim
            </h1>
            <div className="text">
              <p className="age">7 Years -</p>
              <p className="breed">Parrot </p>
            </div>
          </div>
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
              src={images[1]}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
            <h1 className="name" style={{ marginTop: "-27%" }}>
              Tom
            </h1>
            <div className="text">
              <p className="age">12 Years -</p>{" "}
              <p className="breed"> Bearded Dragon</p>
            </div>
          </div>
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
              style={{
                background: "rgb(50, 50, 50)",
                color: "whitesmoke",
                width: "23.5vw",
                height: "55vh",
                fontSize: "25px",
              }}
            >
              <h1 style={{ marginTop: "15px" }}>THE EVENT</h1>
              <br />
              <p>The Date-The:Time</p>
              <br />
              <p>The things that happen at the event</p>
            </div>
            <div
              className="eventMap"
              style={{
                width: "45vw",
                height: "55vh",
                border: "2px solid black",
                background: "orange",
              }}
            ></div>
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
    </>
  );
}




export default home;