import React from 'react';
import styles from './main.module.css';
import logo from '../MainDraw.svg';

const Main = () => {
    return (
        <div className={styles.mainContainer}> 
            <div className={styles.mainDrawContainer}>
                {/* <div>Main Draw</div> */}
                <img src={logo} alt=""/>
            </div>
            <div className={styles.mainDescriptionContainer}>
                <h1>Who are we?</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet risus et efficitur pretium. Nulla at mi justo. Sed dapibus sapien ullamcorper sem vehicula, non tincidunt elit laoreet. 
                </p>
            </div>
        </div>
    );
}

export default Main;
