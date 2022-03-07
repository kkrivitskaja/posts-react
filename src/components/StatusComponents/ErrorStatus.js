import React from 'react';
import errorIcon from '../../img/errorIcon.gif';
import PropTypes from 'prop-types';
import styles from './ErrorStatus.module.css';

const ErrorStatus = (props) => {
    console.log(props.error);
    return (
        <div className={styles.error}>
            <img src={errorIcon} alt="errorIcon" className={styles.img} />
            <p>
                {props.message}
                <br />
                {props.error}
            </p>
        </div>
    );
};

ErrorStatus.propTypes = {
    error: PropTypes.string,
};

export default ErrorStatus;
