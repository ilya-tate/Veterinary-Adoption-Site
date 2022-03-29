import React from 'react'
import Bar from '../components/form/Bar'
import WithBoth from '../components/layout/with/WithBoth'
import Filter from "../assets/svgs/filter.svg"
import Input from '../components/form/Input'
import Search from "../assets/svgs/search.svg"
import styles from "../styles/pages/animals.module.scss"
import Animals from '../components/animal/Animals'
import pig from "../assets/images/gentleman.png";

const action = (option) => console.log(option)
const content = [{
    title: "Sex",
    options: [{
        option: "Male",
        checked: false,
    }, {
        option: "Female",
        checked: false,
    }],
    action
}, {
    title: "Type",
    options: [{
        option: "Dog",
        checked: false,
    }, {
        option: "Cat",
        checked: false,
    }, {
        option: "Bunny",
        checked: false,
    }, {
        option: "Pig",
        checked: false,
    }],
    action
}, {
    title: "Breed",
    options: [{
        option: "Good Boy",
        checked: false,
    }, {
        option: "Good Girl",
        checked: false,
    }, {
        option: "Bloodhound",
        checked: false,
    }],
    action
}, {
    title: "Colors",
    options: [{
        option: "Red",
        checked: false,
    }, {
        option: "Blue",
        checked: false,
    }, {
        option: "Brown",
        checked: false,
    }],
    action
}, {
    title: "Location",
    options: [{
        option: "NW Campus",
        checked: false,
    }, {
        option: "SW Campus",
        checked: false,
    }],
    action
}]

const animalsData = [{
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: true,
    image: pig
}, {
    name: "Space Cowboy",
    sex: "Male",
    age: 3,
    featured: false,
    image: pig
}, {
    name: "Pikachu",
    sex: "Male",
    age: 1,
    featured: false,
    image: pig
}, {
    name: "Pig",
    sex: "Female",
    age: .5,
    featured: false,
    image: pig
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig
}, {
    name: "Space Cowboy",
    sex: "Male",
    age: 3,
    featured: false,
    image: pig
}, {
    name: "Pikachu",
    sex: "Male",
    age: 1,
    featured: false,
    image: pig
}, {
    name: "Pig",
    sex: "Female",
    age: .5,
    featured: false,
    image: pig
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig
}, {
    name: "Hotdog",
    sex: "Male",
    age: 4,
    featured: false,
    image: pig
}]

const animals = () => {
    return (
        <WithBoth className={styles.animals}>
            <div className={styles.content}>
                <div className={styles.filter}>
                    <Bar icon={<Filter />} content={content} className={styles.bar} />
                    <Input name="search" icon={<Search />} className={styles.search} />
                </div>
                <Animals data={animalsData} />
            </div>
        </WithBoth>
    )
}

export default animals