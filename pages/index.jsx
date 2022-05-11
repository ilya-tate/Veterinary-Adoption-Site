import React, {useEffect, useState} from 'react'
import WithBoth from "../components/layout/with/WithBoth"
import styles from "../styles/pages/home.module.scss"
import pig from "../assets/images/gentleman.png"
import Animal from '../components/animal/Animal'
import Link from "next/link"
import Event from '../components/event/Event'

const dummyData = {
    events: [{
        title: "Mass Adoption Event",
        info: {
            desc: "An event where a bunch of people come together to adopt all at once",
            location: "12345 W. Nowhere Dr.",
            date: "March 18th, 2022",
            time: "9:00am - 2:00pm"
        },
        map: <iframe aria-label='Google Map Adoption Event' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.423262644803!2d-112.345088!3d33.636351999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db553b54930177%3A0xc9d20627bfccf487!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1651274664093!5m2!1sen!2sus"  className={styles.elem}width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
        id: 1,
    }, {
        title: "Mass Adoption Event 2",
        info: {
            desc: "An event where a bunch of people come together to adopt all at once",
            location: "12345 W. Nowhere Dr.",
            date: "March 18th, 2022",
            time: "9:00am - 2:00pm"
        },
        map: <iframe aria-label='Google Map Adoption Event' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.423262644803!2d-112.345088!3d33.636351999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db553b54930177%3A0xc9d20627bfccf487!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1651274664093!5m2!1sen!2sus"  className={styles.elem}width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
        id: 2,
    }, {
        title: "Mass Adoption Event 3",
        info: {
            desc: "An event where a bunch of people come together to adopt all at once",
            location: "12345 W. Nowhere Dr.",
            date: "March 18th, 2022",
            time: "9:00am - 2:00pm"
        },
        map: <iframe aria-label='Google Map Adoption Event' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.423262644803!2d-112.345088!3d33.636351999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db553b54930177%3A0xc9d20627bfccf487!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1651274664093!5m2!1sen!2sus"  className={styles.elem}width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
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
    }]
}

const Home = () => {
    const [eventIndex, setEventIndex] = useState(0);
        
    return (
        <WithBoth className={styles.home}>
            <h1 className={styles.title}>West Mec Veterinary Program Adoption Portal</h1>
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
                <ul className={styles.choseEventMobile}>
                    {dummyData.events.map((_, i) => <li key={i} className={styles.num} onClick={() => setEventIndex(i)}>
                        {i + 1}
                    </li>)}
                </ul>
                <div className={styles.eventsContainer}>
                    {dummyData.events.map(({id, ...props}, index) => <Event key={id} id={id} show={index === eventIndex} {...props}/>)}
                </div>
            </div>
            <div className={styles.animals}>
                <h2 className={styles.heading}>Featured Animals</h2>
                <div className={styles.animalsContainer}>
                    {dummyData.animals.map(({id, ...animal}) => <Animal key={id} id={id}{...animal} />)}
                </div>
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