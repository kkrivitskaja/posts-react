import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../../redux/actions/postByIdActions';
import { CommentsList } from '../CommentsComponents/CommentsListComponent';
import styles from './SinglePostComponent.module.css';

export const SinglePost = () => {
    const dispatch = useDispatch();
     const { postId } = useParams();
    const [isShowComment, setShowComment] = useReducer((e) => !e, false);
   
    const postById = useSelector((state) => state.postById.postById);
    const state = useSelector((state) => state);

    // const users = useSelector((state) => state.users.users);
    // const [user] = users.filter((user) => user.id === postById.userId);

    useEffect(() => {
        console.log('here come in useEffect');
        console.log('in useEffect getPostById: ', postById);
        dispatch(getPostById(postId));
    }, [dispatch, postId]);


    console.log('STATE in component: ', state);
    console.log('getPostById in component: ', postById);

    console.log('Single postById ', postById);
    console.log('Single post USERID', postById.userId);

    //    console.log('Single post users value', users);
    // console.log('Single post USER value', user);

    return (
        <>
            <div className={styles.post}>
                <h3>{postById.title}</h3>
                {/* <h4>Post by {user.name}</h4> */}
                <br />
                <div className={styles.postBody}>
                    <p>{postById.body}</p>
                    <button onClick={setShowComment} className={styles.btn}>
                        Comments
                    </button>
                </div>
            </div>
            {isShowComment ? <CommentsList postId={postId} /> : null}
        </>
    );
};






