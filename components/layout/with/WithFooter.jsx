import Head from '../Head';
import Foot from './Foot'
import styles from "../../../styles/components/layout/with/WithFooter.module.scss"

// Probably won't ever be used but for coving all bases it's here

const WithNav = ({children, className}) => {
    return (
        <main className={className}>
            <Head />
            {children}
            <Foot />
        </main>
    )
}

export default WithNav