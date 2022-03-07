import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../../redux/actions/postByIdActions';
import { CommentsList } from '../CommentsComponents/CommentsListComponent';
import styles from './SinglePostComponent.module.css';

export const SinglePost = () => {
    const dispatch = useDispatch();
    const [isShowComment, setShowComment] = useReducer((e) => !e, false);
    const { postId } = useParams();

    const post = useSelector((state) => state.postById.postById);

    const users = useSelector((state) => state.users.users);
    const [user] = users.filter((user) => user.id === post.userId);

    useEffect(() => {
        console.log('here come');
        console.log('in useEffect getPostById: ', postId);
        dispatch(getPostById(postId));
    }, [dispatch, postId]);

    console.log('getPostById in component: ', postId);

    console.log('Single post ', post);
    // console.log('Single post USERID', post.userId);

    // add logic for displaying user name!!!

    //  console.log('Single post users value', users);
    console.log('Single post USER value', user);

    return (
        <>
            <div className={styles.post}>
                <h2>{post.title}</h2>
                <h2>Post by {user.name}</h2>
                <br />
                <div className={styles.postBody}>
                    <p>{post.body}</p>
                    <button onClick={setShowComment}>Comments</button>
                </div>
            </div>
            {isShowComment ? <CommentsList postId={postId} /> : null}
        </>
    );
};
