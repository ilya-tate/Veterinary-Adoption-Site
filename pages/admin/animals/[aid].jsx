import React, {useState} from 'react'
import WithBoth from "../../../components/layout/with/WithBoth"
import styles from "../../../styles/pages/admin/animals/[aid].module.scss"
import Image from "../../../assets/svgs/image.svg"

const EditAnimal = () => {
    const [images, setImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <WithBoth className={styles.editAnimal}>
            <div className={styles.images}>
                {/* <div className={styles.main}>
                    <div className={styles.slider}>
                        {images.length ? <div className={styles.left} onClick={() => setImageIndex(i => i - 1 < 0 ? images.length - 1 : i - 1)}>
                            <Left className={styles.icon} />
                        </div> : null}
                        <div className={styles.image}>
                            <Image
                                src={images[imageIndex] || <Image />}
                                alt={dummyData.name}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className={styles.elem}
                            />
                        </div>
                        {images.length ? <div className={styles.right} onClick={() => setImageIndex(i => i + 1 > images.length - 1 ? 0 : i + 1)}>
                            <Right className={styles.icon} />
                        </div> : null}
                    </div>
                    <h2 className={styles.name}>
                        {dummyData.name}
                    </h2>
                </div> */}
                <button className={styles.uploadImage}>Upload Image</button>
            </div>
            <div className={styles.common}>
                <h2>Common Information</h2>
                <div className={styles.mainForm}>

                </div>
            </div>
        </WithBoth>
    )
}

export default EditAnimal