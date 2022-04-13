import { React, useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Footer from "./components/layout/Footer";
import { Divider, Icon } from "semantic-ui-react";
// import Nav from "./components/layout/Nav";
import Map from "./components/maps/Map";
import { parseCookies } from "nookies";
import { baseURL } from "./util/auth";

const images = [
  "/bulldog.jfif",
  "/labpuppy.jfif",
  "/bullmastiff.jfif",
  "/germanpuppy.jfif",
  "/mastiffpuppy.jfif",
];

const changePage = () => {
  setTimeout(() => {
    window.location.replace("/home");
  }, 200);
};

export default function Home({ setDarkmode, darkmode, setIndex }) {
  const [click, setClick] = useState(false);
  return (
    <div className="intro">
      <div className={click ? "hidden" : "indexMain"}>
        <h1 className="indexTitle">West Mec Vets</h1>
        <h2>
          This will be where you describe what the website is. Is it adoption is
          is events is it both and what the purpose of it is. So yeah that's
          what that is for. Just so you know that that is what it is for.
        </h2>
        <a
          onClick={() => {
            setClick(true);
            changePage();
          }}
        >
          <button>Enter Website</button>
        </a>
        <br />
        <div className="socialDiv">
          <div className="imgDiv">
            <a href="">
              <img src="/instagram.png" className="socials" />
            </a>
          </div>
          <div className="imgDiv">
            <a href="">
              <img src="/bulldog.jfif" className="socials" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
