import React, {useState} from 'react'
import WithBoth from "../../../components/layout/with/WithBoth"
import styles from "../../../styles/pages/admin/animals/[aid].module.scss"
import Input from "../../../components/form/Input"
import Area from '../../../components/form/Area'
import Radios from '../../../components/form/Radios'
import Image from "next/image"
import TempImage from "../../../assets/svgs/image.svg"
import Left from "../../../assets/svgs/left.svg"
import Right from "../../../assets/svgs/right.svg"
import X from "../../../assets/svgs/x.svg"
import Video from "../../../assets/svgs/video.svg"

const radios = {
    sex: [{name: "male", heading: "Male"}, {name: "female", heading: "Female"}],
    vaccinated: [{name: "yes", heading: "Yes"}, {name: "no", heading: "No"}],
    neutered: [{name: "yes2", heading: "Yes"}, {name: "no2", heading: "No"}],
}

const EditAnimal = () => {
    const [images, setImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0);
    const [video, setVideo] = useState(null)

    const uploadImage = (e) => {
        const files = [...e.target.files].map(file => ({file, name: file.name, url: URL.createObjectURL(file)}))
        setImages((i) => [...i, ...files])
    }

    const deleteImage = (index) => {
        if (imageIndex === images.length - 1 && images.length !== 1) setImageIndex(i => i - 1);
        setImages((img) => img.filter((_, i) => i !== index));
    }

    return (
        <WithBoth className={styles.editAnimal}>
            <form>
                <div className={styles.images}>
                    <div className={styles.slide}>
                        <div className={styles.slider}>
                            {images.length > 1 ? <div className={styles.left} onClick={() => setImageIndex(i => i - 1 < 0 ? images.length - 1 : i - 1)}>
                                <Left className={styles.icon} />
                            </div> : null}
                            <div className={styles.image + " " + (images[imageIndex] ? "" : styles.noImage)}>
                                {images[imageIndex] ? <Image
                                    src={images[imageIndex].url}
                                    alt={images[imageIndex].name}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
                                    className={styles.elem}
                                /> : <>
                                    <TempImage className={styles.icon} />
                                    <span>Upload an Image</span>
                                </>}
                            </div>
                            {images.length > 1 ? <div className={styles.right} onClick={() => setImageIndex(i => i + 1 > images.length - 1 ? 0 : i + 1)}>
                                <Right className={styles.icon} />
                            </div> : null}
                            {images.length ? <div className={styles.del} onClick={() => deleteImage(imageIndex)}>
                                <X className={styles.icon} />
                            </div> : null}
                        </div>
                    </div>
                    <button className={styles.uploadImage}>
                        <span className={styles.text}>Upload Image</span>
                        <input className={styles.file} multiple accept="image/png,image/jpg,image/jpeg" type="file" name="images" id="images" onChange={uploadImage} />
                    </button>
                </div>
                <div className={styles.common}>
                    <h2 className={styles.heading}>Required</h2>
                    <div className={styles.mainForm}>
                        <Input name="name" heading="Name" />
                        <div className={styles.breedAndAge}>
                            <Input className={styles.breed} name="breed" heading="Breed" />
                            <Input className={styles.age} name="age" heading="Age" />
                        </div>
                        <Area name="description" heading="Description" limit={300} />
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
                <div className={styles.optional}>
                    <h2 className={styles.heading}>Optional</h2>
                    <div className={styles.videoWithInput}>
                        <div className={styles.video + " " + (video ? "" : styles.noVideo)}>
                            {video ? <iframe
                                width="100%"
                                height="100%"
                                className={styles.iframe}
                                src={video}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                wmode="transparent"
                            ></iframe> : <>
                                <Video className={styles.icon} />
                                <span>Link a Video</span>
                            </>}
                        </div>
                        <Input name="video" heading="Youtube URL Link" onChange={(val) =>
                            setVideo(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(val) ? val.replace(/watch\?v=/g, "embed/") : null)
                        } />
                    </div>
                    <div className={styles.needs}>
                        <div className={styles.heading}>Needs</div>
                        <label htmlFor="needs" className={styles.input}>
                            <input
                                type="text"
                                name="needs"
                                id="needs"
                                className={styles.elem}
                                onChange={() => { }}
                            />
                        </label>
                    </div>
                </div>
            </form>
        </WithBoth>
    )
}

export default EditAnimal