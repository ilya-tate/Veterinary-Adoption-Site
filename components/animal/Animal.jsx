import {Image} from "semantic-ui-react"
import styles from "../../styles/components/animal/Animal.module.scss"
import Star from "../../assets/svgs/star.svg"
import Link from "next/link";

const Animal = ({animal}) => {
    return (
        <Link href={`/animals/${animal._id}`}>
            <div className={styles.animal}>
                <div className={styles.image}>
                    <Image
                        src="/bulldog.jfif"
                        alt={animal.name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className={styles.image}
                        loading="lazy"
                        onClick={console.log("animal", animal)}
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>
                        {animal.name}
                    </div>
                    <div className={styles.other}>
                        <div className={styles.common}>
                            <p>{animal.gender === "f" || animal.gender === "F" || animal.gender === "female" || animal.gender === "Female" ? "Female" : "Male"}</p>
                            <div className={styles.decorator}></div>
                            <p>{animal.age} years</p>
                        </div>
                        {/* <div className={styles.featured}>
                            {featured && <>
                                <p>Featured</p>
                                <span className={styles.icon}>
                                    <Star />
                                </span>
                            </>}
                        </div> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Animal