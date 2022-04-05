import React, {useEffect, useState} from 'react'
import Bar from '../components/form/Bar'
import WithBoth from '../components/layout/with/WithBoth'
import Filter from "../assets/svgs/filter.svg"
import Input from '../components/form/Input'
import Search from "../assets/svgs/search.svg"
import styles from "../styles/pages/animals.module.scss"
import Animals from '../components/animal/Animals'
import pig from "../assets/images/gentleman.png";
import useDelayed from '../hooks/useDelayed'

const barContent = {
    sex: ["Male", "Female"],
    type: ["Dog", "Cat", "Bunny", "Pig"],
    breed: ["Good Boy", "Good Girl", "Bloodhound"],
    color: ["Red", "Blue", "Brown"],
    location: ["NW Campus", "SW Campus"],
}

const animalsData = [{
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: true,
    image: pig,
    id: 0,
}, {
    name: "Space Cowboy",
    sex: "Male",
    age: 3,
    featured: false,
    image: pig,
    id: 1,
}, {
    name: "Pikachu",
    sex: "Male",
    age: 1,
    featured: false,
    image: pig,
    id: 2,
}, {
    name: "Pig",
    sex: "Female",
    age: .5,
    featured: false,
    image: pig,
    id: 3,
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig,
    id: 4,
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig,
    id: 5,
}, {
    name: "Space Cowboy",
    sex: "Male",
    age: 3,
    featured: false,
    image: pig,
    id: 6,
}, {
    name: "Pikachu",
    sex: "Male",
    age: 1,
    featured: false,
    image: pig,
    id: 7,
}, {
    name: "Pig",
    sex: "Female",
    age: .5,
    featured: false,
    image: pig,
    id: 8,
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig,
    id: 9,
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig,
    id: 10,
}]

const animals = () => {
    const [filter, setFilter] = useState(barContent);
    const [search, setSearch] = useState("");

    // Toggles or untoggles a filter that will change the display
    const toggleFilter = (title, option) => {
        if (filter[title].includes(option)) {
            setFilter(f => ({...f, [title]: f[title].filter((opt) => opt !== option)}))
        } else {
            setFilter(f => ({...f, [title]: [...f[title], option]}))
        }
    }

    return (
        <WithBoth className={styles.animals}>
            <div className={styles.content}>
                <div className={styles.filter}>
                    <Bar
                        icon={<Filter />}
                        content={barContent}
                        filter={filter}
                        toggle={toggleFilter}
                        className={styles.bar}
                    />
                    <Input
                        name="search"
                        icon={<Search />}
                        className={styles.search}
                        onChange={(val) => setSearch(val)}
                    />
                </div>
                <Animals data={animalsData.filter(animal => 
                    Object.entries(filter).some(([title, option]) => option.includes(animal[title]))
                )} />
            </div>
        </WithBoth>
    )
}

export default animals