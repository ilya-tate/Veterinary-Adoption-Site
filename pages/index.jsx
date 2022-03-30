import Head from "next/head";
import Image from "next/image";
import Footer from "./components/layout/Footer";
import { Divider, Icon } from "semantic-ui-react";
import Nav from "./components/layout/Nav";
import Map from "./components/maps/Map";
import { parseCookies } from "nookies";
import { baseURL } from "./util/auth";

const image =
  "data:image/jpeg;base64,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";
const image2 =
  "data:image/jpeg;base64,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";

  const home = ({ user, postData, errorLoading }) =>  {
  return (
    <div
      className="homeDiv"
      style={{ overflowX: "hidden" }}
    >
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
      </Head>

      <Nav />
      <div
        className="main"
        style={{
          height: "60vh",
          width: "100vw",
          display: "inline-flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "8%",
        }}
      >
        <div className="mainContent" style={{background: "lightgray", width: "100%", display: "inline-flex"}}>
          <img src="./bulldog.jfif" style={{width: "40%", height: "90%", marginTop: "1.5%", marginLeft: "20px", borderRadius: "36px"}}/>
          <div style={{marginLeft: "5%"}}>
          <h1 className="homeHeader">West-Mec Veterinary Adoptions</h1>
          <o style={{fontSize: "25px"}}>We are 2021-22s West Mec Veterinary Class</o><br/><br/>
          <button className="homeAdopt">Adopt Today</button>
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
          style={{ backgroundColor: "black", color: "white", width: "25%" }}
        >
          <h1 className="name" style={{ marginTop: "88%" }}>
            Henry
          </h1>
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
            marginLeft: "5%",
          }}
        >
          <h1 className="name" style={{ marginTop: "88%" }}>
            Jim
          </h1>
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
            marginLeft: "5%",
          }}
        >
          <h1 className="name" style={{ marginTop: "88%" }}>
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
        <div
          className="event1 event"
          style={{ border: "2px solid black", width: "25%" }}
        >
          <img src={image} className="eventImage" />
          <div
            className="header"
            style={{ display: "inline-flex", width: "100%" }}
          >
            <h1
              style={{
                marginLeft: "5%",
                fontSize: "30px",
                position: "relative",
                top: "-55px",
                display: "inline-flex"
              }}
            >
              <a className="eventItemLarge" href="https://www.google.com/maps/place/West-MEC+Central+Campus/@33.535945,-112.295028,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4104080e38d9:0x1fbd2919e78fa444!8m2!3d33.5361021!4d-112.2929752" style={{display: "inline-flex"}}>
                <Icon name="map marker alternate" />
                <p className="eventItemLarge">West Mec SouthWest</p>
              </a>
            </h1>
          </div>
          <div className="eventText">
            <p className="eventP">The event for the thing</p>
          </div>
        </div>
        <div
          className="event1 event"
          style={{ border: "2px solid black", width: "25%" }}
        >
          <img src={image2} className="eventImage" />
          <div
            className="header"
            style={{ display: "inline-flex", width: "100%", textAlign: "center" }}
          >
            <h1
              style={{
                marginLeft: "10%",
                fontSize: "30px",
                position: "relative",
                top: "-55px",
              }}
            >
              <a className="eventItemLarge" href="https://www.google.com/maps/place/West-MEC+Central+Campus/@33.535945,-112.295028,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4104080e38d9:0x1fbd2919e78fa444!8m2!3d33.5361021!4d-112.2929752" style={{display: "inline-flex"}}>
                <Icon name="map marker alternate" />
                <p className="eventItemLarge">West Mec Central</p>
              </a>
            </h1>
          </div>
          <div className="eventText">
            <p className="eventP">The event for the thing</p>
          </div>
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

home.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseURL}/api/v1/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { postData: res.data };
  } catch (error) {
    console.log(error);
    return { errorLoading: true };
  }
};

export default home
