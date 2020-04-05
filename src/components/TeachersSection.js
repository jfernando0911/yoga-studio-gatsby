import React from 'react'
import styles from './teacherssection.module.css'
import Card from './Card'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'

const TeachersSection = () => {
    return (
        <div className={styles.teachersSectionContainer}>
            <h2 className={styles.centerH2}>TEACHERS</h2>
            <div className={styles.cardsContainers}>
                <Card src={img1} name={"Richard Holmes"} description={"Lorem ipsum dolor sit amet"}/>
                <Card src={img2} name={"Howard Howard"} description={"Lorem ipsum dolor sit amet"}/>
                <Card src={img3} name={"Sherri Baker"} description={"Lorem ipsum dolor sit amet"}/>
            </div>
        </div>
    );
}

export default TeachersSection;
