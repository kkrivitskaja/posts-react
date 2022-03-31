import React from 'react';
import PropTypes from 'prop-types';

import errorIcon from '../../img/errorIcon.gif';
import styles from './ErrorStatus.module.css';

const ErrorStatus = (props) => {
    console.log(props.error);
    return (
        <div className={styles.error}>
            <img src={errorIcon} alt="errorIcon" className={styles.img} />
            <p>
                Sorry, Something went terribly wrong. Fail to fetch {props.message} data.
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
