import {useState} from "react"
import Dropdown from "../../assets/svgs/dropdown.svg"
import styles from "../../styles/components/form/Bar.module.scss"

// Content is in the form of a object containing
// [{
//     title: "name that will be shown without hover",
//     options: [option, option1, option2],
//     action: (option) => {} 
// }, {
//     title: "name that will be shown without hover",
//     options: [option, option1, option2],
//     action: (option) => {} 
// },]

const Bar = ({icon, content, className}) => {
    const [dropdown, setDropdown] = useState(-1);

    return (
        <div className={styles.bar + " " + className}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.content}>
                {content.map(({title, options}, index) => <div key={index}>
                    <div className={styles.display}>
                        <div className={styles.title} onClick={() => dropdown === index ? setDropdown(-1) : setDropdown(index)}>
                            <p tabIndex="0">{title}</p>
                            <div className={styles.icon + " " + (dropdown === index ? styles.flipped : "")}>
                                <Dropdown />
                            </div>
                        </div>
                        <ul className={styles.dropdown + " " + (dropdown === index ? styles.droped : "")}>
                            {options.map(({option, checked}, index) => <li key={index} className={styles.item}>
                                <div className={styles.check}>
                                    <input
                                        type="checkbox"
                                        name={option}
                                        id={option}
                                        className={styles.checkbox}
                                    />
                                    <div className={styles.mark}></div>
                                </div>
                                <p>{option}</p>
                            </li>)}
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Bar