import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../redux/actions/postsActions';
import { getCommentsByPostId } from '../../redux/actions/commentsActions';
import { getUsers } from '../../redux/actions/userActions';
import { useParams } from 'react-router-dom';
import { Comments } from '../CommentsComponents/index';
import styles from './SinglePostComponent.module.css';

export const SinglePost = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const [isShowComment, setShowComment] = useReducer((e) => !e, false);
    // const fetchData = async () => {
    //     await dispatch(getPosts());
    //     await dispatch(getComments());
    //     await dispatch(getUsers());
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    useEffect(() => {
        dispatch(getCommentsByPostId(postId));
    }, [dispatch,postId]);

    const posts = useSelector((state) => state.filteredPosts.filteredPosts);
    const [post] = posts.filter((post) => post.id.toString() === postId);

    const commentsList = useSelector((state) => state.comments.comments);
    const users = useSelector((state) => state.users.users);

    return (
        <>
            <div className={styles.post}>
                <h2>{post.title}</h2>
                <br />
                <p>{post.body}</p>
                <button onClick={setShowComment}>Comments</button>
            </div>
            {isShowComment
                ? commentsList?.map((comment) => <Comments key={comment.id} comment={comment} />)
                : null}
        </>
    );
};
