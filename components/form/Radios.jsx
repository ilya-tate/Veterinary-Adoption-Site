import styles from "../../styles/components/form/Radios.module.scss"

const Radios = ({cata, content}) => {
    return <div style={styles.radios}>
        {content.map(({name, heading}, i) => <div key={i} className={styles.radio}>
            <div className={styles.bubble}>
                <input type="radio" name={cata} id={name} className={styles.elem} />
                <div className={styles.check}></div>
            </div>
            <p>{heading}</p> 
        </div>)}
    </div> 
    
}

export default Radios;