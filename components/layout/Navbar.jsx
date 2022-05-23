import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/images/west-mec-logo.png"
import styles from "../../styles/components/layout/Navbar.module.scss"
import Menu from "../../assets/svgs/menu.svg";
import X from "../../assets/svgs/x.svg";
import {forwardRef, useState} from "react";

const Navbar = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="West-Mec Arrow Logo"
                            layout="fill"
                        />
                    </Link>
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
            <ul className={styles.links + " " + (showMobileNav ? styles.active : "")}>
                <li className={styles.link}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/animals" >
                        Animals
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/admin" >
                        Admin
                    </Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={() => setShowMobileNav(smn => !smn)}>
                {showMobileNav ? <X /> : <Menu />}
            </div>
        </nav >
    )
}

export default Navbar