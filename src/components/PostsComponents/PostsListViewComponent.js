import React from 'react';
import LoadingStatus from '../StatusComponents/LoadingSatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import NoResultsFound from '../StatusComponents/NoResultsFound';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostCard from './PostCardComponent';
import styles from '../UsersComponents/UsersComponent.module.css';

export const PostsListView = () => {
    const { loading, filteredPosts, error } = useSelector((state) => state.filteredPosts);

    return (
        <>
            {loading && <LoadingStatus />}
            {!filteredPosts && !loading && <NoResultsFound message={'Sorry, no posts found'} />}
            {error && !loading && <ErrorStatus error={error} />}
            {!loading && filteredPosts &&
                filteredPosts.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
