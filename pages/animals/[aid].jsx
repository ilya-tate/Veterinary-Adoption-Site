import { useRouter } from "next/router"
import WithBoth from "../../components/layout/with/WithBoth";
import styles from "../../styles/pages/animals/[aid].module.scss"
import Image from "next/image"
import { useEffect, useState } from "react";
import gentleman from "../../assets/images/gentleman.png";
import hotdog from "../../assets/images/hotdog.jpg";
import Left from "../../assets/svgs/left.svg"
import Right from "../../assets/svgs/right.svg"


const dummyData = {
    name: "Ferdinaind",
    images: [gentleman, hotdog],
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
            <div className={styles.main}>
                <div className={styles.slider}>
                    <div className={styles.left} onClick={() => setImage(i => i - 1 < 0 ? dummyData.images.length - 1 : i - 1)}>
                        <Left className={styles.icon}/>
                    </div>
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
                    <div className={styles.right} onClick={() => setImage(i => i + 1 > dummyData.images.length -1 ? 0 : i + 1)}>
                        <Right className={styles.icon}/>
                    </div>
                </div>
                <h2 className={styles.name}>
                    {dummyData.name}
                </h2>
            </div>
        </WithBoth>
    )
}

export default IndividualAnimal