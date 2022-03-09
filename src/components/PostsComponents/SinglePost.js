import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CommentsList } from '../CommentsComponents/CommentsList';
import styles from './SinglePost.module.css';
import { getPostById } from '../../requests/posts';
import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import NoResultsFound from '../StatusComponents/NoResultsFound';

export const SinglePost = () => {
    const { postId } = useParams();
    const [isShowComment, setShowComment] = useReducer((e) => !e, false);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post, setPost] = useState();

    const messageNoPost = 'POST';

    useEffect(() => {
        getPostById(postId)
            .then((res) => {
                setError(null);
                setPost(res);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [postId]);

    return (
        <>
            {isLoading && error == null && <LoadingStatus />}
            {error !== null && <ErrorStatus error={error} />}
            {!post && !isLoading && <NoResultsFound message={messageNoPost} />}
            {!isLoading && error == null && post && (
                <div className={styles.post}>
                    <h3>{post.title}</h3>
                    <br />

                    <div className={styles.postBody}>
                        <p>{post.body}</p>

                        <button onClick={setShowComment} className={styles.btn}>
                            Comments
                        </button>
                    </div>
                </div>
            )}
            {isShowComment ? <CommentsList postId={postId} /> : null}
        </>
    );
};
