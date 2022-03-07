import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getUsers } from '../../redux/actions/userActions';
import { getPosts } from '../../redux/actions/postsActions';

import PostCard from '../PostsComponents/PostCardComponent';
import NoResultsFound from '../StatusComponents/NoResultsFound';
import LoadingStatus from '../StatusComponents/LoadingStatus';
import ErrorStatus from '../StatusComponents/ErrorStatus';
import styles from '../UsersComponents/UsersComponent.module.css';

export const SingleUser = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const fetchData = async () => {
        await dispatch(getPosts());
        await dispatch(getUsers());
    };

    const { loading, users, error } = useSelector((state) => state.users);
    const [user] = users.filter((user) => user.id.toString() === userId);

    const { loadingPosts, posts, errorPosts } = useSelector((state) => state.posts);
    const postsByUser = posts.filter((post) => post.userId.toString() === userId);

    const messageNoUser = 'USER';
    const postsNotFound = `POSTS BY ${user.name}`;
    const message = 'Sorry, Something went terribly wrong. Fail to fetch data.';

    useEffect(() => {
        fetchData();
    }, []);

   
    return (
        <>
            {(loading || loadingPosts) && <LoadingStatus />}
            {!user && <NoResultsFound message={messageNoUser} />}
            {!postsByUser.length && <NoResultsFound message={postsNotFound} />}
            {user && postsByUser.length && <h3> Posts by {user.name}:</h3>}
            {((error && !loading) || (!loadingPosts && errorPosts)) && (
                <ErrorStatus error={error} message={message} />
            )}
            {!loading &&
                !error &&
                !loadingPosts &&
                !errorPosts &&
                user &&
                postsByUser.length &&
                postsByUser.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
