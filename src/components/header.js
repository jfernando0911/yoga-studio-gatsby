import React from 'react';
import styles from './header.module.css';
import logo from '../LogoImage.svg';
import { Link } from "gatsby";

const Header = () =>
    (
        <header className={styles.headerContainer}>

            <div className={styles.logoContainer}>
                <img src={logo} alt=""></img>
                <div>Yoga studio</div>
            </div>

            <nav className={styles.navContainer}>
                <ul className={styles.navUlContainer}>
                    <li> <Link>Home</Link></li>
                    <li><Link to="#teachers">Teachers</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )

export default Header;
