import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCommentsByPostId } from '../../redux/actions/commentsActions';
import { Comment } from './CommentComponent';

export const CommentsList = (props) => {
    const dispatch = useDispatch();
    const commentsList = useSelector((state) => state.comments.comments);

    useEffect(() => {
        dispatch(getCommentsByPostId(props.postId));
    }, []);

    return (
        <>
            {commentsList?.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </>
    );
};
