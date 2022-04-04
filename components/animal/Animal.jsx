import Image from "next/image"
import styles from "../../styles/components/animal/Animal.module.scss"
import Star from "../../assets/svgs/star.svg"
import Link from "next/link";
import useDelayed from "../../hooks/useDelayed";

const Animal = ({image, name, sex, age, featured, id, display}) => {
    const delayedShow = useDelayed(display, 2000);

    console.log(display)

    if (!delayedShow && !display) return null;
    return (
        <Link href={`/animals/${id}`}>
            <div className={styles.animal + " " + (display ? "" : styles.hide)}>
                <div className={styles.image}>
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className={styles.elem}
                        loading="lazy"
                    />
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.other}>
                        <div className={styles.common}>
                            <p>{sex}</p>
                            <div className={styles.decorator}></div>
                            <p>{age} years</p>
                        </div>
                        <div className={styles.featured}>
                            {featured && <>
                                <p>Featured</p>
                                <span className={styles.icon}>
                                    <Star />
                                </span>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Animal