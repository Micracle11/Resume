import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
        <h1>MICHAELSON P. CARABOT</h1>
        <p>1926 Union Drive Street Union Village Bagumbong, Caloocan City</p>
        <p>Phone: (+63)9086927579/ (028)990-41-21</p>
        <p>michaelson.carabot@gmail.com</p>
        </header>
    );
};

export default Header;