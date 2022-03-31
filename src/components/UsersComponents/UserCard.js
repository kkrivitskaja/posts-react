import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserCard.module.css';

const UserCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h4>{props.user.name}</h4>
                <h5>{props.user.username}</h5>
                <h5>{props.user.email}</h5>
                <h5>{props.user.website}</h5>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
};

export default UserCard;
