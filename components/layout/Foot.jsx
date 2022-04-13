import Up from "../../assets/svgs/up.svg"
import Facebook from "../../assets/svgs/facebook.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import Twitter from "../../assets/svgs/twitter.svg"
import Link from "next/link"
import styles from "../../styles/components/layout/Foot.module.scss";
import Right from "../../assets/svgs/right.svg";

const socials = [{
    link: "https://instagram.com",
    icon: <Instagram className={styles.icon}/>,
    id: 0,
},{
    link: "https://facebook.com",
    icon: <Facebook className={styles.icon}/>,
    id: 1,
},{
    link: "https://twitter.com",
    icon: <Twitter className={styles.icon}/>,
    id: 2,
}]

const links = [{
    link: "/",
    title: "Home",
    id: 0,
},{
    link: "/animals",
    title: "Animals",
    id: 1,
},{
    link: "/admin",
    title: "Admin",
    id: 2,
}]

const emails = {
    northwest: ["adoptnwc@west-mec.org", "other.emails@west-mec.org"],
    southwest: ["adoptswc@west-mec.org", "other.emails@west-mec.org"],
}

const toTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const Foot = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.toTop} onClick={toTop}>
                <Up className={styles.arrow} />
            </div>
            <h6 className={styles.title}>
                <span>West-Mec Veterinary</span>
                <span>Adoption Portal</span>
            </h6>
            <div className={styles.socails}>
                {socials.map(({link, icon, id}) =>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        key={id}
                        className={styles.socail}
                    >
                        {icon}
                    </a>
                )}
            </div>
            <div className={styles.links}>
                <div className={styles.title}>
                    Links
                </div>
                <div className={styles.children}>
                    {links.map(({link, title, id}) => <Link href={link} key={id}>
                        <div className={styles.link}>
                            {title}
                            <Right className={styles.icon} />
                        </div>
                    </Link>)}
                </div>
            </div>
            <div className={styles.locations}>
                <div className={styles.campus}>
                    <div className={styles.common}>
                        <p className={styles.title}>Northwest</p>
                        <div className={styles.location}>14358 W. Nowhere Ln.</div>
                    </div>
                    <div className={styles.contacts}>
                        {emails.northwest.map((email, index) => <p key={index}>{email}</p>)}
                    </div>
                </div>
                <div className={styles.campus}>
                    <div className={styles.common}>
                        <p className={styles.title}>Southwest</p>
                        <div className={styles.location}>14358 W. Nowhere Ln.</div>
                    </div>
                    <div className={styles.contacts}>
                        {emails.southwest.map((email, index) => <p key={index}>{email}</p>)}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Foot