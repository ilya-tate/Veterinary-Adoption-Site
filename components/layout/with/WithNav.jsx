import Head from './Head'
import Navbar from './Navbar'
import styles from "../../../styles/components/layout/with/WithNav.module.scss"

// This layout will be used second most often, besides WithBoth
// Adds a navbar, doesn't add a footer

const WithNav = ({children, className}) => {
    return (
        <main className={className}>
            <Head />
            <div className={styles.min}>
                <Navbar />
                {children}
            </div>
        </main>
    )
}

export default WithNav