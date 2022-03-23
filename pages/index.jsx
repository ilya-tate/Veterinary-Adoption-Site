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
      <Footer />
    </div>
  );
}
