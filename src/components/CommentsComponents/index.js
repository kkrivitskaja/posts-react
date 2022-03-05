import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export const Comments = (props) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentBody}>
                <h3>{props.comment.name}</h3>
                <p>{props.comment.body}</p>
                <h5>{props.comment.email}</h5>
            </div>
        </div>
    );
};

Comments.propTypes = {
    comment: PropTypes.object,
};
