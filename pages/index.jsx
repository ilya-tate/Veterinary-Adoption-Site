import Head from "next/head";
import Image from "next/image";
import Footer from "./components/layout/Footer";
import {Divider, Icon} from "semantic-ui-react"
import Nav from "./components/layout/Nav";

export default function Home() {
  return (
    <div className="homeDiv" style={{ overflowX: "hidden" }}>
      <Nav />
      <div
        className="main"
        style={{
          height: "60vh",
          width: "100vw",
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "13%"
        }}
      >
        <div className="mainContent">
          <h1 className="homeHeader">West-Mec Veterinary Adoptions</h1>
          <button className="homeAdopt">Adopt Today</button>
        </div>
      </div>
      <div className="gallery" style={{marginTop: "10hv", height: "60vh", width: "100vw", display: "inline-flex", justifyContent: "center", textAlign: "center", marginTop: "13%"}}>
        <div className="animal1 animalBanner" style={{backgroundColor: "black", color: "white", width: "25%"}}>
          <h1 className="name" style={{marginTop: "88%"}}>Henry</h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>{" "}
            <p className="breed">German Shepard</p>
          </div>
        </div>
        <div className="animal2 animalBanner" style={{backgroundColor: "black", color: "white", width: "25%", marginLeft: "5%"}}>
          <h1 className="name" style={{marginTop: "88%"}}>Jim</h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>{" "}
            <p className="breed"> Parrot</p>
          </div>
        </div>
        <div className="animal3 animalBanner" style={{backgroundColor: "black", color: "white", width: "25%", marginLeft: "5%"}}>
          <h1 className="name" style={{marginTop: "88%"}}>Tom</h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>{" "}
            <p className="breed"> Bearded Dragon</p>
          </div>
        </div>
      </div>
      <div className="events"
        style={{
          marginTop: "10vh",
          height: "60vh",
          width: "100vw",
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "13%"
        }}>
        <div className="event1 event" style={{border: "2px solid black", backgroundColor: "#ebeae8", width: "25%"}}>
          <div className="header" style={{display: "inline-flex", width: "100%"}}><h1 style={{marginLeft: "10%", fontSize: "30px"}}><a><Icon name="map marker alternate" /></a> <a>West Mec Central</a></h1></div>
        </div>
        <div className="event1 event" style={{border: "2px solid black", backgroundColor: "#ebeae8", width: "25%", marginLeft: "5%"}}>
          
          </div>
      </div>
      <div style={{position: "relative", bottom: "0"}}>
        <Divider style={{backgroundColor: "gray", color: "gray", height: "5px"}}/>
        <footer className="footer" style={{backgroundColor: "black", color: "white", width: "100vw", height: "23vh"}}></footer>
      </div>
    </div>
  );
}
