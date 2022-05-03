import styles from "../../styles/components/form/Input.module.scss"

const Input = ({name, type, icon, className, onChange, heading}) => {
    return (
        <div className={styles.inputContainer}>
            {heading && <div className={styles.heading}>{heading}</div>}
            <label htmlFor={name} className={styles.input + " " + className}>
                <input
                    type={type || "text"}
                    name={name}
                    id={name}
                    className={styles.elem}
                    onChange={(e) => onChange && onChange(e.target.value)}
                />
                {icon ? <div className={styles.icon}>
                    {icon}
                </div> : null}
            </label>
        </div>
    )
}

export default Input