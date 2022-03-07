import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import NoResultsFound from '../StatusComponents/NoResultsFound';

import PostCard from './PostCardComponent';
import styles from '../UsersComponents/UsersComponent.module.css';

export const PostsListView = () => {
    const { loading, filteredPosts, error } = useSelector((state) => state.filteredPosts);
    const messageNoPosts = 'POSTS';
    const messageErrPosts = 'posts';

    return (
        <>
            {loading && <LoadingStatus />}
            {!filteredPosts && !loading && <NoResultsFound message={messageNoPosts} />}
            {error && !loading && <ErrorStatus error={error} message={messageErrPosts} />}
            {!loading &&
                !error &&
                filteredPosts &&
                filteredPosts.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
