import React from 'react';
import styles from './contactSection.module.css'

const ContactSection = () => (
    <div className={styles.contactSectionContainer} id={'contact'}>
        <h2 className={styles.centerh2}> CONTACT</h2>
        <div className={styles.formContainer}>
            <div className={styles.nameFormContainer}>
                <p>Name:</p>
                <input type="text" placeholder="Please enter your name" />

            </div>
            <div className={styles.emailFormContainer}>
                <p>Email:</p>
                <input type="email" placeholder="Please enter your e-mail" />
            </div>
            <div className={styles.messageFormContainer}>
                <p>Message:</p>
                <textarea></textarea>
            </div>
        </div>
    </div>

)


export default ContactSection;
