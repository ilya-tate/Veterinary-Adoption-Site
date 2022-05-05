import {useRouter} from "next/router"
// import WithBoth from "../../components/layout/with/WithBoth";
import styles from "../../styles/pages/animals/[aid].module.scss"
import Image from "next/image"
import {useEffect, useState} from "react";
import gentleman from "../../assets/images/gentleman.png";
import hotdog from "../../assets/images/hotdog.jpg";
import Left from "../../assets/svgs/left.svg"
import Right from "../../assets/svgs/right.svg"
import Link from "next/link"


const dummyData = {
    name: "Ferdinaind",
    images: [gentleman, hotdog],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    age: .5,
    common: {
        desc: "Don't mess with the bull if you can't get the horns or something like that. This dog is mean, lean, and a fighting machine. Don't get on it's bad side or else you'll become... bad",
        breed: "Hotdog-Weiner mix",
        sex: "Male",
        neutered: true,
        vaccinated: true,
    },
    specs: {
        needs: ["Love", "Apprication", "Lots of Pills"],
        cautions: ["Bad around children", "The 1972 incident"],
    }
}

const IndividualAnimal = () => {
    const [image, setImage] = useState(0)
    const router = useRouter();
    const {aid} = router.query;

    return (
        <WithBoth className={styles.indivAnimal}>
            <div className={styles.side}>
                <div className={styles.important}>
                    <div className={styles.main}>
                        <div className={styles.slider}>
                            {dummyData.images.length ? <div className={styles.left} onClick={() => setImage(i => i - 1 < 0 ? dummyData.images.length - 1 : i - 1)}>
                                <Left className={styles.icon} />
                            </div> : null}
                            <div className={styles.image}>
                                <Image
                                    src={dummyData.images[image]}
                                    alt={dummyData.name}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    className={styles.elem}
                                />
                            </div>
                            {dummyData.images.length ? <div className={styles.right} onClick={() => setImage(i => i + 1 > dummyData.images.length - 1 ? 0 : i + 1)}>
                                <Right className={styles.icon} />
                            </div> : null}
                        </div>
                        <h2 className={styles.name}>
                            {dummyData.name}
                        </h2>
                    </div>
                    {dummyData.video ? <div className={styles.video}>
                        <iframe
                            width="100%"
                            height="100%"
                            className={styles.iframe}
                            src={dummyData.video.replace("watch?v=", "embed/") + "?rel=0&showinfo=0&autohide=1&wmode=transparent"}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            wmode="transparent"
                        ></iframe>
                    </div> : null}
                </div>
                <div className={styles.info}>
                    <h2 className={styles.name}>
                        {dummyData.name}
                    </h2>
                    <div className={styles.common}>
                        <h4 className={styles.commonInfo}>
                            Common Information
                        </h4>
                        <ul className={styles.info}>
                            <li className={styles.item + " " + styles.noFlex}>
                                <p className={styles.title}>Description:</p>
                                <p className={styles.details}>{dummyData.common.desc}</p>
                            </li>
                            <li className={styles.item}>
                                <p className={styles.title}>Breed:</p>
                                <p className={styles.details}>{dummyData.common.breed}</p>
                            </li>
                            <li className={styles.item}>
                                <p className={styles.title}>Sex:</p>
                                <p className={styles.details}>{dummyData.common.sex}</p>
                            </li>
                            <li className={styles.item}>
                                <p className={styles.title}>Neutered:</p>
                                <p className={styles.details}>{dummyData.common.neutered ? "Yes" : "No"}</p>
                            </li>
                            <li className={styles.item}>
                                <p className={styles.title}>Vaccinated:</p>
                                <p className={styles.details}>{dummyData.common.vaccinated ? "Yes" : "No"}</p>
                            </li>
                        </ul>
                    </div>
                    {dummyData.specs.needs.length || dummyData.specs.cautions.length ? <div className={styles.specs}>
                        <h4 className={styles.specInfo}>Specifications</h4>
                        <div className={styles.info}>
                            {dummyData.specs.needs.length ? <div className={styles.cata}>
                                <h4 className={styles.title}>Needs:</h4>
                                <ul className={styles.list}>
                                    {dummyData.specs.needs.map((need, index) => <li key={index}>{need}</li>)}
                                </ul>
                            </div> : null}
                            {dummyData.specs.cautions.length ? <div className={styles.cata}>
                                <h4 className={styles.title}>Cautions:</h4>
                                <ul className={styles.list}>
                                    {dummyData.specs.cautions.map((cauc, index) => <li key={index}>{cauc}</li>)}
                                </ul>
                            </div> : null}
                        </div>
                    </div> : null}
                    <div className={styles.contact}>
                        <Link href={`/animals/${aid}/contact`}>
                            <button className={styles.button}>
                                Contact a Teacher
                            </button>
                        </Link>
                        <p>Make this animal a part of your family!</p>
                    </div>
                </div>
            </div>
        </WithBoth>
    )
}

export default IndividualAnimal