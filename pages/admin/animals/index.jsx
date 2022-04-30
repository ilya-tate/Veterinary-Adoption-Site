import WithBoth from '../../../components/layout/with/WithBoth'
import styles from "../../../styles/pages/admin/animals/index.module.scss"
import Input from "../../../components/form/Input"
import Search from "../../../assets/svgs/search.svg"
import {useState} from 'react'
import Animal from '../../../components/animal/Animal'
import pig from "../../../assets/images/gentleman.png"

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

const AdminAnimals = () => {
    const [search, setSearch] = useState("")

    return (
        <WithBoth className={styles.editAnimal}>
            <h2 className={styles.heading}>Search for an Animal to Edit</h2>
            <div className={styles.search}>
                <Input name="search" icon={<Search />} onChange={(query) => setSearch(query.toLowerCase())} />
            </div>
            <div className={styles.animals}>
                {animalsData.filter(({name}) => name.toLowerCase().includes(search)).map(({id, ...animal}) => <Animal {...animal} id={id} key={id} link={`/admin/animals/${id}`} />)}
            </div>
        </WithBoth>
    )
}

export default AdminAnimals