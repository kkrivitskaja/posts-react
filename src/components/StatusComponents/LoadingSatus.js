import React from 'react';
import spinner from '../../img/spinner.gif';

const LoadingStatus = () => {
    return (
        <div>
            <p>Loading...</p>
            <img src={spinner} alt="spinner" />
        </div>
    );
};

export default LoadingStatus;
