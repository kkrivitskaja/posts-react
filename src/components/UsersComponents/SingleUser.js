import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getAllPosts } from '../../requests/posts';

import PostCard from '../PostsComponents/PostCard';
import NoResultsFound from '../StatusComponents/NoResultsFound';
import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import styles from '../UsersComponents/SingleUser.module.css';

export const SingleUser = () => {
    const { userId } = useParams();
    const [posts, setPosts] = useState([]);
 

    const { loading, users, error } = useSelector((state) => state.users);
    const [user] = users.filter((user) => user.id.toString() === userId);

    const postsByUser = posts.filter((post) => post.userId.toString() === userId);

    const messageNoUser = 'USER';
    const postsNotFound = `POSTS BY ${user.name}`;
    const message = 'Sorry, Something went terribly wrong. Fail to fetch data.';

    useEffect(() => {
        getAllPosts().then((res) => setPosts(res));
    }, []);

    if (loading) {
        return <LoadingStatus />;
    }
    if (!users) {
        return <NoResultsFound message={messageNoUser} />;
    }
    if (!postsByUser.length && !loading) {
        return <NoResultsFound message={postsNotFound} />;
    }
    if (error && !loading) {
        return <ErrorStatus error={error} message={message} />;
    }
    const showPost = user && postsByUser.length && !loading && !error;


    return (
        <>
            {user && postsByUser.length && <h3> Posts by {user.name}:</h3>}
            {showPost && <h3> Posts by {user.name}:</h3> &&
                postsByUser.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
