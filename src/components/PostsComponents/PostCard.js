import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostCard.module.css';

const PostCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <h3>{props.post.title}</h3>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.object,
};

export default PostCard;
