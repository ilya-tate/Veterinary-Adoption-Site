import styles from "../../styles/components/event/Event.module.scss"
const Event = ({show, map, title, info}) => {
  return (
    <div className={styles.event + " " + (show ? styles.show : "")}>
        <div className={styles.map}>
            {map}
        </div>
        <div className={styles.eventInfo}>
            <div className={styles.eventTitle}>
                {title}
            </div>
            <div className={styles.simple}>
                <p className={styles.desc}>
                    {info.desc}
                </p>
                <div className={styles.details}>
                    <div>
                        Location: {info.location}
                    </div>
                    <div>
                        Date: {info.date}
                    </div>
                    <div>
                        Time: {info.time}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event