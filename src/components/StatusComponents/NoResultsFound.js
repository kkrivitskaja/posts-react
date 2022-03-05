import React from 'react';
import errorIcon from '../../img/errorIcon.gif';
import PropTypes from 'prop-types';

const NoResultsFound = (props) => {
    return (
        <div>
            {' '}
            <img src={errorIcon} alt="errorIcon" />
            <p>{props.message}</p>
        </div>
    );
};

NoResultsFound.propTypes = {
    message: PropTypes.string,
};

export default NoResultsFound;
