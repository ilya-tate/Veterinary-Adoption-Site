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
import {useRouter} from 'next/router'
import Button from '../../../components/form/Button'

const radios = {
    sex: [{name: "male", heading: "Male"}, {name: "female", heading: "Female"}],
    vaccinated: [{name: "yes", heading: "Yes"}, {name: "no", heading: "No"}],
    neutered: [{name: "yes", heading: "Yes"}, {name: "no", heading: "No"}],
}

const EditAnimal = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [needsInput, setNeedsInput] = useState("")
    const [cautionsInput, setCautionsInput] = useState("")
    const [form, setForm] = useState({
        images: [],
        video: "",
        needs: [],
        cautions: [],
        name: "",
        breed: "",
        age: null,
        sex: "male",
        neutered: "yes",
        vaccinated: "yes",
        desc: "",
    })

    const router = useRouter();

    useEffect(() => {
        const {aid} = router.query;
        if (aid !== "new") {
            // Make an axios call to get aid
            // set values 
            console.log("old animal")
        }
        console.log("new animal")
    }, [router])

    const appendForm = (prop, val) => {
        setForm(f => ({...f, [prop]: val}))
    }

    const uploadImage = (e) => {
        const files = [...e.target.files].map(file => ({file, name: file.name, url: URL.createObjectURL(file)}))
        appendForm("images", [...form.images, ...files], "push");
    }

    const deleteImage = (index) => {
        if (imageIndex === form.images.length - 1 && form.images.length !== 1) setImageIndex(i => i - 1);
        appendForm("images", form.images.filter((_, i) => i !== index));
    }

    const addNeed = () => needsInput && appendForm("needs", [...form.needs, needsInput], "push");
    const removeNeed = (index) => appendForm("needs", form.needs.filter((_, i) => i !== index))

    useEffect(() => {
        setNeedsInput("")
    }, [form.needs])

    const addCaution = () => cautionsInput && appendForm("cautions", [...form.cautions, cautionsInput], "push");
    const removeCaution = (index) => appendForm("cautions", form.cautions.filter((_, i) => i !== index))

    useEffect(() => {
        setCautionsInput("")
    }, [form.cautions])

    const submitForm = (e) => {
        e.preventDefault();

        const {elements} = e.target

        if (
            !form.images.length ||
            !elements.name.value ||
            !elements.breed.value ||
            !elements.age.value ||
            !elements.desc.value
        ) {return;}

        const fd = new FormData();
        form.images.forEach(({file}) => fd.append("images", file));
        fd.append("video", form.video || "");
        fd.append("name", form.name);
        fd.append("breed", form.breed);
        fd.append("age", form.age);
        fd.append("desc", form.desc);
        fd.append("sex", form.sex);
        fd.append("neutered", form.neutered);
        fd.append("vaccinated", form.vaccinated);
        form.needs.forEach((need) => fd.append("needs", need))
        form.cautions.forEach((caution) => fd.append("cautions", caution))

        // for (const data of fd.entries()) console.log(data)

        // MAKE AN AXIOS CALL TO DB

        router.push("/admin/animals")
    }

    return (
        <WithBoth className={styles.editAnimal}>
            <form className={styles.form} onSubmit={submitForm}>
                <div className={styles.side}>
                    <div className={styles.images}>
                        <div className={styles.slide}>
                            <div className={styles.slider}>
                                {form.images.length > 1 ? <div className={styles.left} onClick={() => setImageIndex(i => i - 1 < 0 ? form.images.length - 1 : i - 1)}>
                                    <Left className={styles.icon} />
                                </div> : null}
                                <div className={styles.image + " " + (form.images[imageIndex] ? "" : styles.noImage)}>
                                    {form.images[imageIndex] ? <Image
                                        src={form.images[imageIndex].url}
                                        alt={form.images[imageIndex].name}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        className={styles.elem}
                                    /> : <>
                                        <TempImage className={styles.icon} />
                                        <span>Upload an Image</span>
                                    </>}
                                </div>
                                {form.images.length > 1 ? <div className={styles.right} onClick={() => setImageIndex(i => i + 1 > form.images.length - 1 ? 0 : i + 1)}>
                                    <Right className={styles.icon} />
                                </div> : null}
                                {form.images.length ? <div className={styles.del} onClick={() => deleteImage(imageIndex)}>
                                    <X className={styles.icon} />
                                </div> : null}
                            </div>
                        </div>
                        <Button className={styles.uploadImage}>
                            <span className={styles.text}>Upload Images</span>
                            <input className={styles.file} multiple accept="image/png,image/jpg,image/jpeg" type="file" name="images" id="images" onChange={uploadImage} />
                        </Button>
                    </div>
                    <div className={styles.common}>
                        <div className={styles.mainForm}>
                            <Input name="name" heading="Name" defaultValue={form.name} />
                            <div className={styles.breedAndAge}>
                                <Input className={styles.breed} name="breed" heading="Breed" defaultValue={form.breed} />
                                <Input className={styles.age} name="age" heading="Age" defaultValue={form.age} />
                            </div>
                            <Area className={styles.area} name="desc" heading="Description" limit={300} defaultValue={form.desc} />
                            <ul className={styles.other}>
                                <li className={styles.otherItem}>
                                    <p>Sex:</p>
                                    <div className={styles.button}>
                                        <Radios
                                            cata="sex"
                                            content={radios.sex}
                                            defaultChecked={radios.sex.findIndex(({name}) => name === form.sex)}
                                            onChange={(v) => appendForm("sex", v)}
                                        />
                                    </div>
                                </li>
                                <li className={styles.otherItem}>
                                    <p>Neutered:</p>
                                    <div className={styles.button}>
                                        <Radios
                                            cata="neutered"
                                            content={radios.neutered}
                                            defaultChecked={radios.neutered.findIndex(({name}) => name === form.neutered)}
                                            onChange={(v) => appendForm("neutered", v)}
                                        />
                                    </div>
                                </li>
                                <li className={styles.otherItem}>
                                    <p>Vaccinated:</p>
                                    <div className={styles.button}>
                                        <Radios
                                            cata="vaccinated"
                                            content={radios.vaccinated}
                                            defaultChecked={radios.vaccinated.findIndex(({name}) => name === form.vaccinated)}
                                            onChange={(v) => appendForm("vaccinated", v)}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.optional}>
                    <h2 className={styles.heading}>Optional</h2>
                    <div className={styles.secondaryForm}>
                        <div className={styles.videoWithInput}>
                            <div className={styles.video + " " + (form.video ? "" : styles.noVideo)}>
                                {form.video ? <iframe
                                    width="100%"
                                    height="100%"
                                    className={styles.iframe}
                                    src={form.video}
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
                                appendForm("video", /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(val) ? val.replace(/watch\?v=/g, "embed/") : "")
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
                                    {form.needs.map((need, index) => <li className={styles.item} key={index}>
                                        <span className={styles.text}>{need}</span>
                                        <Minus className={styles.icon} onClick={() => removeNeed(index)} />
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
                                    {form.cautions.map((need, index) => <li className={styles.item} key={index}>
                                        <span className={styles.text}>{need}</span>
                                        <Minus className={styles.icon} onClick={() => removeCaution(index)} />
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.submit}>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </WithBoth>
    )
}

export default EditAnimal