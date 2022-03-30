import {React, useState, useEffect} from "react";

import Head from "next/head";
import Image from "next/image";
import Footer from "./components/layout/Footer";
import { Divider, Icon } from "semantic-ui-react";
import Nav from "./components/layout/Nav";
import Map from "./components/maps/Map";

const images = ["/bulldog.jfif", "/labpuppy.jfif", "/bullmastiff.jfif", "/germanpuppy.jfif", "/mastiffpuppy.jfif"];

export default function Home() {
  const [image, setImage] = useState();
  const [random, setRandom] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(()=>{
      setImage(images[Math.floor(Math.random() * 5)]);
    }, 1)
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * 5)])
    }, 2000);

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, []);

  return (
    <div
      className="homeDiv"
      style={{ overflowX: "hidden" }}
    >
      {/* <Head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossOrigin=""/>
      </Head> */}

      <Nav />
      <div
        className="main"
        style={{
          height: "60vh",
          width: "100vw",
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "11.7%",
        }}
      >
        <div className="mainContent" style={{background: "lightgray", width: "100%", display: "inline-flex"}}>
          <div style={{width: "40vw", minWidth: "39vw", background: "orange"}}><img src={image} style={{height: "90%", marginTop: "3.5%", maxWidth: "35vw", borderRadius: "36px"}} className="homeAni"/></div>
          <div style={{marginLeft: "1%"}}>
          <h1 className="homeHeader">West-Mec Veterinary Adoptions</h1><br/>
          <p style={{fontSize: "25px"}}>Labore elit adipisicing quis voluptate veniam ullamco. Deserunt cupidatat laboris eu quis incididunt. Incididunt duis labore cupidatat irure ad excepteur. Id amet commodo ea adipisicing aute velit ut consectetur ad esse. Commodo nulla duis eiusmod ex laborum.</p><br/>
          <a href="/adoption"><button className="homeAdopt">Adopt Today</button></a>
          </div>
        </div>
      </div>
      <div
        className="gallery"
        style={{
          marginTop: "10hv",
          height: "60vh",
          width: "100vw",
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "13%",
        }}
      >
        <div
          className="animal1 animalBanner"
          style={{ color: "whitesmoke", width: "25%" }}
        >
          <img src={images[0]} style={{height: "100%", width: "100%"}}/>
          <h1 className="name" style={{ marginTop: "-27%" }}>
            Henry
          </h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>
            <p className="breed">German Shepard</p>
          </div>
        </div>
        <div
          className="animal2 animalBanner"
          style={{ color: "whitesmoke", width: "25%", marginLeft: "5%" }}
        >
          <img src={images[2]} style={{height: "100%", width: "100%"}}/>
          <h1 className="name" style={{ marginTop: "-27%" }}>
            Jim
          </h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>
            <p className="breed">Parrot </p>
          </div>
        </div>
        <div
          className="animal3 animalBanner"
          style={{
            color: "whitesmoke",
            width: "25%",
            marginLeft: "5%"
          }}
        >
          <img src={images[1]} style={{height: "100%", width: "100%"}}/>
          <h1 className="name" style={{ marginTop: "-27%" }}>
            Tom
          </h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>{" "}
            <p className="breed"> Bearded Dragon</p>
          </div>
        </div>
      </div>
      <div
        className="events"
        style={{
          marginTop: "10vh",
          height: "60vh",
          width: "100vw",
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "13%",
        }}
      >
        <div className="event" style={{display: "inline-flex"}}>
          <div className="eventDesc" style={{background: "rgb(50, 50, 50)", color: "whitesmoke", width: "23.5vw", height: "55vh", fontSize: "25px"}}>
            <h1 style={{marginTop: '15px'}}>THE EVENT</h1>
            <br/>
            <p>The Date-The:Time</p>
            <br/>
            <p>The things that happen at the event</p>
          </div>
          <div className="eventMap" style={{width: "45vw", height: "55vh", border: "2px solid black"}}></div>
        </div>
      </div>
      <div style={{ position: "relative", bottom: "0" }}>
        <Divider
          style={{
            backgroundColor: "gray",
            color: "gray",
            height: "7px",
            paddingBottom: "0",
            marginBottom: "0",
          }}
        />
        <Footer
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
  );
}
