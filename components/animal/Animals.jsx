import styles from "../../styles/components/animal/Animals.module.scss"
import Animal from "./Animal"

const Animals = ({data, display}) => {
    return (
        <div className={styles.animals}>
            {data.length ?
                data.map(({id, ...props}, index) => <Animal {...props} key={id} id={id} display={display[index]} />) :
                <div className={styles.none}>
                    :( No Animals Found
                </div>
            }
        </div>
    )
}

export default Animals