import React from 'react';
import PropTypes from 'prop-types';

import errorIcon from '../../img/errorIcon.gif';
import styles from './NoResultsFound.module.css';

const NoResultsFound = (props) => {
    return (
        <div className={styles.results}>
            <img src={errorIcon} alt="errorIcon" />
            <h3>OOPS! SORRY, {props.message} NOT FOUND</h3>
            <p>Sorry but the page you are looking for does not exist</p>
        </div>
    );
};

NoResultsFound.propTypes = {
    message: PropTypes.string,
};

export default NoResultsFound;
