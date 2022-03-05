import React from 'react';
import errorIcon from '../../img/errorIcon.gif';
import PropTypes from 'prop-types';

const ErrorStatus = (props) => {
    return (
        <div>
            {' '}
            <img src={errorIcon} alt="errorIcon" />
            <p>
                Sorry, Something went terribly wrong and you encountered a bug ....
                <br />
                Fail to fetch data. {props.error}
            </p>
        </div>
    );
};

ErrorStatus.propTypes = {
    error: PropTypes.string,
};

export default ErrorStatus;
