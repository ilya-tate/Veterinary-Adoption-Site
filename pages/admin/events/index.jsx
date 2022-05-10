import React from 'react'

const dummyData = [{
    title: "Mass Adoption Event",
    info: {
        desc: "An event where a bunch of people come together to adopt all at once",
        location: "12345 W. Nowhere Dr.",
        date: "March 18th, 2022",
        time: "9:00am - 2:00pm"
    },
    map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.423262644803!2d-112.345088!3d33.636351999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db553b54930177%3A0xc9d20627bfccf487!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1651274664093!5m2!1sen!2sus"  className={styles.elem}width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    id: 1,
}, {
    title: "Mass Adoption Event 2",
    info: {
        desc: "An event where a bunch of people come together to adopt all at once",
        location: "12345 W. Nowhere Dr.",
        date: "March 18th, 2022",
        time: "9:00am - 2:00pm"
    },
    map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.423262644803!2d-112.345088!3d33.636351999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db553b54930177%3A0xc9d20627bfccf487!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1651274664093!5m2!1sen!2sus"  className={styles.elem}width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    id: 2,
}, {
    title: "Mass Adoption Event 3",
    info: {
        desc: "An event where a bunch of people come together to adopt all at once",
        location: "12345 W. Nowhere Dr.",
        date: "March 18th, 2022",
        time: "9:00am - 2:00pm"
    },
    map: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26574.423262644803!2d-112.345088!3d33.636351999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db553b54930177%3A0xc9d20627bfccf487!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1651274664093!5m2!1sen!2sus"  className={styles.elem}width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    id: 3,
},]

const AdminEvents = () => {
    return (
        <div>Able to add, remove, and update events</div>
    )
}

export default AdminEvents