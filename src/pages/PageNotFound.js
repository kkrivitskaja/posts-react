import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PageNotFound.module.css';

export const PageNotFound = () => {
    return (
        <>
            <div className={styles.msg}>
                <h3>404</h3>
                <h3>OOPS! PAGE NOT BE FOUND </h3>
                Sorry but the page you are looking for does not exist, have been removed. name
                changed or is temporarily unavailable
                <p>
                    <Link to={`/`} className={styles.link}>
                        Back to Main page
                    </Link>
                </p>
            </div>
        </>
    );
};
