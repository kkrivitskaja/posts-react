import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getUsers } from '../../redux/actions/userActions';
import { getPosts } from '../../redux/actions/postsActions';


import PostCard from '../PostsComponents/PostCardComponent';
import NoResultsFound from '../StatusComponents/NoResultsFound';
import styles from '../UsersComponents/UsersComponent.module.css';


export const SingleUser = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const fetchData = async () => {
        await dispatch(getPosts());
        await dispatch(getUsers());
    };
    
    const users = useSelector((state) => state.users.users);
    const [user] = users.filter((user) => user.id.toString() === userId);

    const posts = useSelector((state) => state.posts.posts);
    const postsByUser = posts.filter((post) => post.userId.toString() === userId);

    const message = 'USER';
    const postsNotFound = `POSTS BY ${user}.toUpperCase()`;

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            {!user ? <NoResultsFound message={message} /> : <h3> Posts by {user.name}:</h3>}
            {user && !postsByUser && <NoResultsFound message={postsNotFound} />}
            {user &&
                postsByUser &&
                postsByUser.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
