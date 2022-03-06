import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByPostsId } from '../../redux/actions/postsByPostIdActions';
import { useParams } from 'react-router-dom';
import styles from './SinglePostComponent.module.css';
import {CommentsList} from '../CommentsComponents/CommentsListComponent'

export const SinglePost = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const [isShowComment, setShowComment] = useReducer((e) => !e, false);

    useEffect(() => {
        dispatch(getPostsByPostsId(postId));
    }, [dispatch, postId]);

 

    const post = useSelector((state) => state.postsByPostId.postsByPostId);

    // const users = useSelector((state) => state.users.users);
    // add logic for displaying user name!!!

    return (
        <>
            <div className={styles.post}>
                <h2>{post.title}</h2>
                <br />
                <p>{post.body}</p>
                <button onClick={setShowComment}>Comments</button>
            </div>
            {isShowComment
                ? <CommentsList postId={postId}/>
                : null}
        </>
    );
};
