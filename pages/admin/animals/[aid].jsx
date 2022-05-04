import React, {useState} from 'react'
import WithBoth from "../../../components/layout/with/WithBoth"
import styles from "../../../styles/pages/admin/animals/[aid].module.scss"
import Input from "../../../components/form/Input"
import Area from '../../../components/form/Area'
import Radios from '../../../components/form/Radios'
import { useRouter } from 'next/router'

const radios = {
    sex: [{name: "male", heading: "Male"}, {name: "female", heading: "Female"}],
    vaccinated: [{name: "yes", heading: "Yes"}, {name: "no", heading: "No"}],
    neutered: [{name: "yes2", heading: "Yes"}, {name: "no2", heading: "No"}],
}

const EditAnimal = () => {
    const [images, setImages] = useState([])

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
                <h2 className={styles.heading}>Required</h2>
                <div className={styles.mainForm}>
                    <Input name="name" heading="Name" />
                    <div className={styles.breedAndAge}>
                        <Input className={styles.breed} name="breed" heading="Breed" />
                        <Input className={styles.age} name="age" heading="Age" />
                    </div>
                    <Area name="description" heading="Description" limit={300}/>
                    <ul className={styles.other}>
                        <li className={styles.otherItem}>
                            <p>Sex:</p> 
                            <div className={styles.button}>
                                <Radios cata="sex" content={radios.sex} />
                            </div>
                        </li>
                        <li className={styles.otherItem}>
                            <p>Neutered:</p> 
                            <div className={styles.button}>
                                <Radios cata="neutered" content={radios.neutered} />
                            </div>
                        </li>
                        <li className={styles.otherItem}>
                            <p>Vaccinated:</p> 
                            <div className={styles.button}>
                                <Radios cata="vaccinated" content={radios.vaccinated} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </WithBoth>
    )
}

export default EditAnimal