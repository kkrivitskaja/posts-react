import React, { useEffect, useState } from 'react';

import { Comment } from './Comment';
import { getPostComments } from '../../requests/comments';
import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import NoResultsFound from '../StatusComponents/NoResultsFound';

export const CommentsList = ({ postId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState();

       const messageNoComments = 'COMMENTS';

    useEffect(() => {
        getPostComments(postId)
            .then((res) => {
                setError(null);
                setComments(res);
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
            {!comments && !isLoading && <NoResultsFound message={messageNoComments} />}
            {!isLoading &&
                error == null &&
                comments?.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </>
    );
};
