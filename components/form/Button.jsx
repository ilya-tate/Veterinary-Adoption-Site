import styles from "../../styles/components/form/Button.module.scss"
import Link from "next/link";

const Button = ({type, children, className, to}) => {
    return (
        <>
            {to ? <Link href={to}>
                <button type={type || "button"} className={styles.button + " " + (className || "")}>
                    {children}
                </button>
            </Link> : <button type={type || "button"} className={styles.button + " " + (className || "")}>
                {children}
            </button>}
        </>
    )
}

export default Button