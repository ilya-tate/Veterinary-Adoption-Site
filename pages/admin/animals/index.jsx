import WithBoth from '../../../components/layout/with/WithBoth'
import styles from "../../../styles/pages/admin/animals/index.module.scss"

const AdminAnimals = () => {
  return (
    <WithBoth className={styles.editAnimal}>
        This page will contian the ability to search and link to updating and adding and delete animals
    </WithBoth>
  )
}

export default AdminAnimals