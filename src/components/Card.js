import React from 'react';
import styles from './card.module.css'

const Card = (props) => {
    return (
        <div className={styles.cardContainer}>
            {/* <div>Image</div> */}
            <div className={styles.imageCard}>
            <img src={props.src} alt=""/>
            </div>
            
            <div>{props.name}</div>           
            <p>{props.description}</p>
        </div>
    );
}

export default Card;
