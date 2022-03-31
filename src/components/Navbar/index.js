import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export const Navbar = () => {
    return (
        <nav>
            <div className={styles.navLinks}>
                <Link to="/" className={styles.navlink}>
                    Main page
                </Link>
                <Link to="/posts" className={styles.navlink}>
                    Posts list
                </Link>
                <Link to="/users" className={styles.navlink}>
                    Users list
                </Link>
            </div>
        </nav>
    );
};
