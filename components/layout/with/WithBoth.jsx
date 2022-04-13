import Navbar from "../Navbar"
import Foot from "../Foot"
import Head from "../Head"
import styles from "../../../styles/components/layout/with/WithBoth.module.scss"

// This is the layout that will be used most often
// It adds both a navbar and a footer to the page

const WithBoth = ({children, className}) => {
    return (
        // Class name is for styles
        <main className={styles.withBoth + " " + className}>
            <Head />
            <div className={styles.min}>
                <Navbar />
                {children}
            </div>
            <Foot />
        </main>
    )
}

export default WithBoth