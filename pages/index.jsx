import Head from "next/head";
import Image from "next/image";
import Footer from "./components/layout/Footer";
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
        <div className="featuredEvents"></div>
        <div className="mainContent">
          <h1 className="homeHeader">West-Mec Veterinary Adoptions</h1>
          <button className="homeAdopt">Adopt Today</button>
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
          marginTop: "13%"
        }}
      >
        <div
          className="animal1 animalBanner"
          style={{ backgroundColor: "black", color: "white", width: "25%" }}
        >
          <h1 className="name">Henry</h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>{" "}
            <p className="breed">German Shepard</p>
          </div>
        </div>
        <div
          className="animal2 animalBanner"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "25%",
            marginLeft: "5%"
          }}
        >
          <h1 className="name">Jim</h1>
          <div className="text">
            <p className="age">{Math.ceil(Math.random() * 7 + 3)} Years -</p>{" "}
            <p className="breed"> Parrot</p>
          </div>
        </div>
        <div
          className="animal3 animalBanner"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "25%",
            marginLeft: "5%"
          }}
        >
          <h1 className="name">Tom</h1>
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
          marginTop: "13%"
        }}
      ></div>
      <Footer />
    </div>
  );
}
