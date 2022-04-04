import styles from "../../styles/components/form/Input.module.scss"

const Input = ({name, type, icon, className, onChange}) => {
    return (
        <label htmlFor={name} className={styles.input + " " + className}>
            <input
                type={type || "text"}
                name={name}
                id={name}
                className={styles.elem}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className={styles.icon}>
                {icon}
            </div>
        </label>
    )
}

export default Input