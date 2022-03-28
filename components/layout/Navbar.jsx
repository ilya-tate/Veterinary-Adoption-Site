import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/west-mec-logo.png"
import styles from "../../styles/components/Navbar.module.scss"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        alt="West-Mec Arrow Logo"
                        layout="fill"
                    />
                </div>
                <h1 className={styles.h1}>
                    <span className={styles.top}>
                        West-Mec Veterinary
                    </span>
                    <span className={styles.bottom}>
                        Adoption Portal
                    </span>
                </h1>
            </div>
            <ul className={styles.links}>
                <li>
                    <Link href="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/animals">
                        Animals
                    </Link>
                </li>
                <li>
                    <Link href="/admin">
                        Admin
                    </Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar