import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

export const Comment = (props) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentBody}>
                <h4>{props.comment.name}</h4>
                <p>{props.comment.body}</p>
                <h5>{props.comment.email}</h5>
            </div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object,
};
