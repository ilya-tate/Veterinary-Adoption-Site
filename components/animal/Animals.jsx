import styles from "../../styles/components/animal/Animals.module.scss"
import Animal from "./Animal"

const Animals = ({data}) => {
    return (
        <div className={styles.animals}>
            {data.length ?
                data.map(({id, ...props}) => <Animal {...props} key={id} />) :
                <div className={styles.none}>
                    :( No Animals Found
                </div>
            }
        </div>
    )
}

export default Animals