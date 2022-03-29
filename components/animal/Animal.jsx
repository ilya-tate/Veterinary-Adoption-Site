import Image from "next/image"
import styles from "../../styles/components/animal/Animal.module.scss"
import Star from "../../assets/svgs/star.svg"
import Link from "next/link";

const Animal = ({image, name, sex, age, featured}) => {
  return (
      <Link href={`/animals/${name}`}>
        <div className={styles.animal}>
            <div className={styles.image}>
                <Image 
                    src={image} 
                    alt={name} 
                    layout="fill" 
                    objectFit="cover" 
                    objectPosition="center"
                    className={styles.elem} 
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
                    <div>
                        {featured && <p  className={styles.featured}>
                            <span>Featured</span>
                            <span className={styles.icon}>
                                <Star />    
                            </span>    
                        </p>}
                    </div>
                </div>
            </div>
        </div>
      </Link>
  )
}

export default Animal