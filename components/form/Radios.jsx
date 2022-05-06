import styles from "../../styles/components/form/Radios.module.scss"

const Radios = ({cata, content, defaultChecked, onChange}) => {
    return <div className={styles.radios}>
        {content.map(({name, heading}, i) => <div key={i} className={styles.radio}>
            <div className={styles.bubble}>
                <input type="radio" onClick={(e) => onChange(name)} defaultChecked={defaultChecked === i} name={cata} id={name} className={styles.elem} />
                <div className={styles.check}></div>
            </div>
            <p className={styles.heading}>{heading}</p>
        </div>)}
    </div>

}

export default Radios;