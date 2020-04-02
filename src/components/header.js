import React from 'react';
import styles from './header.module.css';
import logo from '../LogoImage.svg';

const header = () =>
    (
        <header className={styles.headerContainer}>

            <div className={styles.logoContainer}>
                <img src={logo}></img>
                <div>Yoga studio</div>
            </div>    
            
            <nav className={styles.navContainer}> 
                <ul className={styles.navUlContainer}>
                    <li>Home</li>
                    <li>Teachers</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )

export default header;
