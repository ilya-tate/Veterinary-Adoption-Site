import React, { useEffect, useState } from "react";
import WithBoth from "../components/layout/with/WithBoth";
import styles from "../styles/pages/home.module.scss";
import Dropdown from "../assets/svgs/dropdown.svg";
import pig from "../assets/images/gentleman.png";
import Animal from "../components/animal/Animal";
import Link from "next/link";
import axios from "axios"
import { setTimeout } from "timers";

const Home = () => {
  const [eventIndex, setEventIndex] = useState(0);
  const [weekAnimals, setWeekAnimals] = useState([]);
  const [weekEvents, setWeekEvents] = useState([]);

  const displayAnis = async () => {
    let { data } = await axios.get("/api/v1/animals/");
    setWeekAnimals(data);
    console.log("animal", data);
  };
  const displayEvents = async() => {
    let { data } = await axios.get("/api/v1/events/");
    setWeekEvents(data);
    console.log("event", data);      
  }
  
  useEffect(() => {
    displayEvents();
    setTimeout(() => {
      displayAnis()      
    }, 5000);

  }, []);
  return (
    <WithBoth className={styles.home}>
      <h1 className={styles.title}>
        West Mec Veterinary Program Adoption Portal
      </h1>
      <div className={styles.banner}>
        <div className={styles.video}>
          <iframe
            width="100%"
            height="100%"
            className={styles.iframe}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0&autohide=1&wmode=transparent"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            wmode="transparent"
          ></iframe>
        </div>
        <div className={styles.intro}>
          <h3 className={styles.title}>Help an Animal Find a New Home</h3>
          <p className={styles.info}>
            <span>
              West-Mec provides care for the animal and prepares for them to
              have a new life inside your home. Find you’re next loved one at
              West-Mec!
            </span>
            <span>
              West-Mec cares for the animals before they reach your arms. This
              includes vaccinating and medicating your soon-to-be best friend!
            </span>
          </p>
        </div>
      </div>
      <div className={styles.events}>
        <h2 className={styles.heading}>Upcoming Events</h2>
        <ul className={styles.choseEventMobile}>
          {weekEvents.map((_, i) => (
            <li className={styles.num} onClick={() => setEventIndex(i)}>
              {i + 1}
            </li>
          ))}
        </ul>
        <div className={styles.eventsContainer}>
          {weekEvents ? weekEvents.map((event, index) => (
            <div
              key={event._id}
              className={
                styles.event + " " + (eventIndex === index ? styles.show : "")
              }
            >
              <iframe className={styles.map} src={event.location}></iframe>
              <div className={styles.eventInfo}>
                <div className={styles.eventTitle}>Name: {event.title}</div>
                <div className={styles.simple}>
                  <p className={styles.desc}>{event.desc}</p>
                  <div className={styles.details}>
                    <div>Date: {event.date ? event.date.split("T")[0] : "UNKNOWN DATE"}</div>
                    <div onClick={console.log(event)}>Time: {event.time ? event.time : "UNKNOWN TIME"}</div>
                  </div>
                </div>
              </div>
            </div>
          )) : <div><h1>NO EVENTS HERE</h1></div>}
        </div>
      </div>
      <div className={styles.animals}>
        <h2 className={styles.heading}>Featured Animals</h2>
        <div className={styles.animalsContainer}>
          {weekAnimals.map((animal) => (
            <Link href={`/animals/${animal._id}`} key={animal._id}>
              <div className={styles.animal}>
                <div className={styles.image}>
                  <img
                    src={animal.pictures[0]}
                    // alt={animal.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className={styles.elem}
                    loading="lazy"
                  />
                </div>
                <div className={styles.details}>
                  <div className={styles.name}>{animal.name}</div>
                  <div className={styles.other}>
                    <div className={styles.common}>
                      <p>{animal.gender}</p>
                      <div className={styles.decorator}></div>
                      <p>{animal.age} years</p>
                    </div>
                    <div className={styles.featured}>
                      {animal.featured && (
                        <>
                          <p>Featured</p>
                          <span className={styles.icon}>
                            <Star />
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/animals">
          <button className={styles.allAnimals}>See All Animals</button>
        </Link>
      </div>
    </WithBoth>
  );
};

export default Home;
