import React, {useEffect, useState} from 'react'
import WithBoth from "../components/layout/with/WithBoth"
import styles from "../styles/pages/home.module.scss"
import Dropdown from "../assets/svgs/dropdown.svg"
import pig from "../assets/images/gentleman.png"
import Animal from '../components/animal/Animal'
import Link from "next/link"

const dummyData = {
    events: [{
        title: "Mass Adoption Event",
        info: {
            desc: "An event where a bunch of people come together to adopt all at once",
            location: "12345 W. Nowhere Dr.",
            date: "March 18th, 2022",
            time: "9:00am - 2:00pm"
        },
        map: "[some google maps link, iframe, or name]",
        id: 1,
    }, {
        title: "Mass Adoption Event",
        info: {
            desc: "An event where a bunch of people come together to adopt all at once",
            location: "12345 W. Nowhere Dr.",
            date: "March 18th, 2022",
            time: "9:00am - 2:00pm"
        },
        map: "[some google maps link, iframe, or name]",
        id: 2,
    }, {
        title: "Mass Adoption Event",
        info: {
            desc: "An event where a bunch of people come together to adopt all at once",
            location: "12345 W. Nowhere Dr.",
            date: "March 18th, 2022",
            time: "9:00am - 2:00pm"
        },
        map: "[some google maps link, iframe, or name]",
        id: 3,
    },],
    animals: [{
        name: "Hotdog",
        sex: "Male",
        age: 4,
        featured: true,
        image: pig,
        id: 0,
    }, {
        name: "Space Cowboy",
        sex: "Male",
        age: 3,
        featured: true,
        image: pig,
        id: 1,
    }, {
        name: "Pikachu",
        sex: "Male",
        age: 1,
        featured: true,
        image: pig,
        id: 2,
    }, {
        name: "Pig",
        sex: "Female",
        age: .5,
        featured: true,
        image: pig,
        id: 3,
    },]
}

const Home = () => {
    return (
        <WithBoth className={styles.home}>
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
                    <h3 className={styles.title}>
                        Help an Animal Find a New Home
                    </h3>
                    <p className={styles.info}>
                        <span>West-Mec provides care for the animal and prepares for them to have a new life inside your home. Find you’re next loved one at West-Mec!</span>
                        <span>West-Mec cares for the animals before they reach your arms. This includes vaccinating and medicating your soon-to-be best friend!</span>
                    </p>
                </div>
            </div>
            <div className={styles.events}>
                <h2 className={styles.heading}>Upcoming Events</h2>
                {dummyData.events.map(({title, info, map, id}, index) => <div key={id} className={styles.event}>
                    <div className={styles.map}>
                        {map}
                    </div>
                    <div className={styles.eventInfo}>
                        <div className={styles.eventTitle}>
                            {title}
                        </div>
                        <div className={styles.simple}>
                            <p className={styles.desc}>
                                {info.desc}
                            </p>
                            <div className={styles.details}>
                                <div>
                                    Location: {info.location}
                                </div>
                                <div>
                                    Date: {info.date}
                                </div>
                                <div>
                                    Time: {info.time}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className={styles.animals}>
                <h2 className={styles.heading}>Featured Animals</h2>
                {dummyData.animals.map(({id, ...animal}) => <Animal key={id} id={id} {...animal} />)}
                <Link href="/animals">
                    <button className={styles.allAnimals}>
                        See All Animals
                    </button>
                </Link>
            </div>
        </WithBoth>
    )
}

export default Home