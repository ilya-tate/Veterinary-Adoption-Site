import React, { useState } from 'react'
import styles from "../../styles/components/form/Area.module.scss"

const Area = ({name, heading, limit}) => {
    const [length, setLength] = useState(0);
    const [content, setContent] = useState("")

    const beyond = (e) => {
        if (e.target.value.length <= limit) {
            setLength(e.target.value.length);
            setContent(e.target.value);
        } else {
            setLength(limit);
            setContent(e.target.value.slice(0, limit))
        }
    } 

    return (
        <div className={styles.area}>
            <div className={styles.heading}>{heading}</div>
            <div className={styles.atop}>
                <textarea className={styles.elem} name={name} id={name} value={content} onChange={beyond}></textarea>
                <p className={styles.len}>
                    <span className={styles.part}>{length}</span>
                    <span className={styles.part}>/</span>
                    <span className={styles.part}>{limit}</span>
                </p>
            </div>
        </div>
    )
}

export default Area