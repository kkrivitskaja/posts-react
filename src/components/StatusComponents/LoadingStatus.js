import React from 'react';
import spinner from '../../img/spinner.gif';
import styles from './LoadingStatus.module.css';

const LoadingStatus = () => {
    return (
        <div className={styles.loading}>
            <p className={styles.p}>Loading...</p>
            <img src={spinner} alt="spinner" className={styles.img} />
        </div>
    );
};

export default LoadingStatus;
