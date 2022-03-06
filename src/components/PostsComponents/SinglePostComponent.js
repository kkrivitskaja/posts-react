import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../redux/actions/postByIdActions';
import { useParams } from 'react-router-dom';
import styles from './SinglePostComponent.module.css';
import { CommentsList } from '../CommentsComponents/CommentsListComponent';

export const SinglePost = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const [isShowComment, setShowComment] = useReducer((e) => !e, false);

    useEffect(() => {
        console.log('getPostById: ', postId);
        dispatch(getPostById(postId));
    },[dispatch, postId]);

    const post = useSelector((state) => state.postById.postById);

    // add logic for displaying user name!!!
    const users = useSelector((state) => state.users.users);
    const [user] = users.filter((user) => user.id === post.userId);

    return (
        <>
            <div className={styles.post}>
                <h2>{post.title}</h2>
                <h2>Post by {user.name}</h2>
                <br />
                <p>{post.body}</p>
                <button onClick={setShowComment}>Comments</button>
            </div>
            {isShowComment ? <CommentsList postId={postId} /> : null}
        </>
    );
};
