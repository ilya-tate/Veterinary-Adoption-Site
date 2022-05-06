import styles from "../../styles/components/form/Input.module.scss"

const Input = ({name, type, icon, className, onChange, heading, defaultValue}) => {
    return (
        <div className={styles.inputContainer + " " + className}>
            {heading && <h6 className={styles.heading}>{heading}</h6>}
            <label htmlFor={name} className={styles.input}>
                <input
                    defaultValue={defaultValue}
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