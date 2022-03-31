import React from 'react';
import { Link } from 'react-router-dom';

import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import NoResultsFound from '../StatusComponents/NoResultsFound';

import PostCard from './PostCard';
import styles from './PostsListView.module.css';

export const PostsListView = ({ filterData, error, isLoading }) => {
    const messageNoPosts = 'POSTS';

    return (
        <>
            {isLoading && error == null && <LoadingStatus />}
            {error !== null && <ErrorStatus error={error} />}
            {!filterData && !isLoading && <NoResultsFound message={messageNoPosts} />}
            {!isLoading &&
                error == null &&
                filterData &&
                filterData.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
