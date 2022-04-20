import { ReactChild, useState } from "react";
import { Image } from "semantic-ui-react";
import { logoutUser } from "../../util/auth";
import Router, { useRouter } from "next/router";

const Nav = ({ setDarkmode, darkmode }) => {
  const [admin, setAdmin] = useState(true);
  const router = useRouter();
  if (router.pathname !== "/" && router.pathname !== "/login")
    return (
      <div
        className={darkmode ? "navbar dark" : "navbar"}
        style={{ position: "fixed", top: 0, width: "100%" }}
      >
        {admin ? (
          <ul
            className="pageList"
            style={{ listStyle: "none", display: "inline-flex" }}
          >
            <li
              className="item"
              style={{
                display: "inline-flex",
                fontSize: "25px",
                marginTop: "-5px",
              }}
            >
              <Image
                src="./DarkLogo.png"
                style={{
                  width: "50px",
                  height: "40px",
                  paddingRight: "10px",
                  paddingBottom: "0",
                }}
                className="logo"
              />
              West-Mec Veterinary
            </li>
            <li style={{ marginRight: "15px", marginLeft: "-20vw" }}>
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => {
                    setDarkmode(!darkmode);
                    console.log(darkmode);
                  }}
                />
                <span className="slider round"></span>
              </label>
            </li>
            <li className="item">
              <a href="/admin" className="item">
                Admin
              </a>
            </li>
            <li className="item">
              <a className="item" href="/home" style={{ marginLeft: "15px" }}>
                Home
              </a>
            </li>
            <li className="item">
              <a
                className="item"
                href="/adoption"
                style={{ marginLeft: "15px" }}
              >
                Adoption
              </a>
            </li>
            <li>
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => {
                    setDarkmode(!darkmode);
                    console.log(darkmode);
                  }}
                />
                <span className="slider round"></span>
              </label>
            </li>
          </ul>
        ) : (
          <ul
            className="pageList"
            style={{ listStyle: "none", display: "inline-flex" }}
          >
            <li
              className="item"
              style={{ display: "inline-flex", fontSize: "40px" }}
            >
              <Image
                src="./DarkLogo.png"
                style={{
                  width: "50px",
                  height: "40px",
                  paddingRight: "10px",
                  paddingBottom: "0",
                  marginTop: "-7px",
                }}
                className="logo"
              />
              West-Mec Veterinary
            </li>
            <li style={{ marginLeft: "-32vw", marginRight: "5px" }}>
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => {
                    setDarkmode(!darkmode);
                    console.log(darkmode);
                  }}
                />
                <span className="slider round"></span>
              </label>
            </li>
            <li className="item">
              <a className="item" href="/home" style={{ marginLeft: "15px" }}>
                Home
              </a>
            </li>
            <li className="item">
              <a
                className="item"
                href="/adoption"
                style={{ marginLeft: "15px" }}
              >
                Adoption
              </a>
            </li>
          </ul>
        )}
      </div>
    );
    if(router.pathname === "/" || router.pathname === "/login"){
      return <></>
    }
};

export default Nav;
