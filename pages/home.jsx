// import React, {useEffect, useState} from 'react'
// import WithBoth from "../components/layout/with/WithBoth"
// import styles from "../styles/pages/home.module.scss"
// import Dropdown from "../assets/svgs/dropdown.svg"
// import pig from "../assets/images/gentleman.png"
// import Animal from '../components/animal/Animal'
// import Link from "next/link"

// const Home = () => {
//     const [eventIndex, setEventIndex] = useState(0);

//     return (
//         <WithBoth className={styles.home}>
//             <h1 className={styles.title}>West Mec Veterinary Program Adoption Portal</h1>
//             <div className={styles.banner}>
//                 <div className={styles.video}>
//                     <iframe
//                         width="100%"
//                         height="100%"
//                         className={styles.iframe}
//                         src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0&autohide=1&wmode=transparent"
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        
//                         wmode="transparent"
//                     ></iframe>
//                 </div>
//                 <div className={styles.intro}>
//                     <h3 className={styles.title}>
//                         Help an Animal Find a New Home
//                     </h3>
//                     <p className={styles.info}>
//                         <span>West-Mec provides care for the animal and prepares for them to have a new life inside your home. Find you’re next loved one at West-Mec!</span>
//                         <span>West-Mec cares for the animals before they reach your arms. This includes vaccinating and medicating your soon-to-be best friend!</span>
//                     </p>
//                 </div>
//             </div>
//             <div className={styles.events}>
//                 <h2 className={styles.heading}>Upcoming Events</h2>
//                 <ul className={styles.choseEventMobile}>
//                     {dummyData.events.map((_, i) => <li key = {i} className={styles.num} onClick={() => setEventIndex(i)}>
//                         {i + 1}
//                     </li>)}
//                 </ul>
//                 <div className={styles.eventsContainer}>
//                     {dummyData.events.map(({title, info, map, id}, index) => <div key={id} className={styles.event + " " + (eventIndex === index ? styles.show : "")}>
//                         <div className={styles.map}>
//                             {map}
//                         </div>
//                         <div className={styles.eventInfo}>
//                             <div className={styles.eventTitle}>
//                                 {title}
//                             </div>
//                             <div className={styles.simple}>
//                                 <p className={styles.desc}>
//                                     {info.desc}
//                                 </p>
//                                 <div className={styles.details}>
//                                     <div>
//                                         Location: {info.location}
//                                     </div>
//                                     <div>
//                                         Date: {info.date}
//                                     </div>
//                                     <div>
//                                         Time: {info.time}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>)}
//                 </div>
//             </div>
//             <div className={styles.animals}>
//                 <h2 className={styles.heading}>Featured Animals</h2>
//                 <div className={styles.animalsContainer}>
//                     {dummyData.animals.map(({id, ...animal}) => "ANI")}
//                 </div>
//                 <Link href="/animals">
//                     <button className={styles.allAnimals}>
//                         See All Animals
//                     </button>
//                 </Link>
//             </div>
//         </WithBoth>
//     )
// }

// export default Home