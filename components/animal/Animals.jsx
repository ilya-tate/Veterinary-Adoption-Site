import styles from "../../styles/components/animal/Animals.module.scss"
import Animal from "./Animal"

const Animals = ({data}) => {
  return (
    <div className={styles.animals}>
        {data.map((props) => <Animal {...props} />)}
    </div>
  )
}

export default Animals