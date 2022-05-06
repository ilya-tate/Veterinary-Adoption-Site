import React, {useState, useEffect} from 'react'
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
import Plus from "../../../assets/svgs/plus.svg"
import Minus from "../../../assets/svgs/minus.svg"
import { useRouter } from 'next/router'

const radios = {
    sex: [{name: "male", heading: "Male"}, {name: "female", heading: "Female"}],
    vaccinated: [{name: "yes", heading: "Yes"}, {name: "no", heading: "No"}],
    neutered: [{name: "yes2", heading: "Yes"}, {name: "no2", heading: "No"}],
}

const EditAnimal = () => {
    const router = useRouter();

    const [images, setImages] = useState([])
    const [imageIndex, setImageIndex] = useState(0);
    const [video, setVideo] = useState(null)
    const [needsInput, setNeedsInput] = useState("")
    const [cautionsInput, setCautionsInput] = useState("")
    const [needs, setNeeds] = useState([])
    const [cautions, setCautions] = useState([])

    const uploadImage = (e) => {
        const files = [...e.target.files].map(file => ({file, name: file.name, url: URL.createObjectURL(file)}))
        setImages((i) => [...i, ...files])
    }

    const deleteImage = (index) => {
        if (imageIndex === images.length - 1 && images.length !== 1) setImageIndex(i => i - 1);
        setImages((img) => img.filter((_, i) => i !== index));
    }

    const addNeed = () => needsInput && setNeeds(n => [...n, needsInput]);
    const removeNeed = (index) => setNeeds(n => n.filter((_, i) => i !== index))

    useEffect(() => {
      setNeedsInput("")
    }, [needs])

    const addCaution = () => cautionsInput && setCautions(c => [...c, cautionsInput]);
    const removeCaution = (index) => setCautions(c => c.filter((_, i) => i !== index))
    
    useEffect(() => {
      setCautionsInput("")
    }, [cautions])

    const submitForm = (e) => {
        e.preventDefault();

        const {elements} = e.target

        if (
            !images.length || 
            !elements.name.value || 
            !elements.breed.value || 
            !elements.age.value ||
            !elements.desc.value
        ) {return;}

        const fd = new FormData();
        images.forEach(({file}) => fd.append("images", file));
        fd.append("video", video || "");
        fd.append("name", elements.name.value);
        fd.append("breed", elements.breed.value);
        fd.append("age", elements.age.value);
        fd.append("desc", elements.desc.value);
        fd.append("sex", [...e.target.sex].filter((sex) => sex.checked)[0].value === "Male" ? "male" : "female" );
        fd.append("neutered", [...e.target.neutered].filter((neutered) => neutered.checked)[0].value === "True" ? true : false );
        fd.append("vaccinated", [...e.target.vaccinated].filter((vaccinated) => vaccinated.checked)[0].value === "True" ? true : false );
        needs.forEach((need) => fd.append("needs", need))
        cautions.forEach((caution) => fd.append("cautions", caution))

        // for (const data of fd.entries()) console.log(data)

        // MAKE AN AXIOS CALL TO DB

        router.push("/admin/animals")
    }

    return (
        <WithBoth className={styles.editAnimal}>
            <form className={styles.form} onSubmit={submitForm}>
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
                        <Area name="desc" heading="Description" limit={300} />
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
                    <div className={styles.secondaryForm}>
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
                        <div className={styles.extra}>
                            <div className={styles.needsAndList}>
                                <div className={styles.needs}>
                                    <div className={styles.heading}>Needs</div>
                                    <label htmlFor="needs" className={styles.input}>
                                        <input
                                            type="text"
                                            name="needs"
                                            id="needs"
                                            className={styles.elem}
                                            value={needsInput}
                                            onChange={(v) => setNeedsInput(v.target.value)}
                                        />
                                        <div className={styles.icon} onClick={addNeed}>
                                            <Plus />
                                        </div>
                                    </label>
                                </div>
                                <ul className={styles.list}>
                                    {needs.map((need, index) => <li className={styles.item} key={index}>
                                        <span className={styles.text}>{need}</span>
                                        <Minus className={styles.icon} onClick={() => removeNeed(index)}/>
                                    </li>)}
                                </ul>
                            </div>
                            <div className={styles.cautionsAndList}>
                                <div className={styles.cautions}>
                                    <div className={styles.heading}>Cautions</div>
                                    <label htmlFor="cautions" className={styles.input}>
                                        <input
                                            type="text"
                                            name="cautions"
                                            id="cautions"
                                            className={styles.elem}
                                            value={cautionsInput}
                                            onChange={(v) => setCautionsInput(v.target.value)}
                                        />
                                        <div className={styles.icon} onClick={addCaution}>
                                            <Plus />
                                        </div>
                                    </label>
                                </div>
                                <ul className={styles.list}>
                                    {cautions.map((need, index) => <li className={styles.item} key={index}>
                                        <span className={styles.text}>{need}</span>
                                        <Minus className={styles.icon} onClick={() => removeCaution(index)}/>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className={styles.submit}>
                    Submit
                </button>
            </form>
        </WithBoth>
    )
}

export default EditAnimal