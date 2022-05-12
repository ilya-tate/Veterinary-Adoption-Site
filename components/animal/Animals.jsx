import {React, useState, useEffect} from "react";
import styles from "../../styles/components/animal/Animals.module.scss"
import Animal from "./Animal"
import axios from "axios"

const Animals = () => {
    const [animals, setAnimals] = useState([])
    const getAnimals = async() => {
        const {data} = await axios.get("/api/v1/animals/adoption")
        setAnimals(data);
    }

    useEffect(() => {
        getAnimals()
    }, [])
    

    return (
        <div className={styles.animals}>
            {animals ?
                animals.map((animal) => <Animal key={animal._id} animal={animal} />) :
                <div className={styles.none}>
                    :( No Animals Found
                </div>
            }
        </div>
    )
}

export default Animals