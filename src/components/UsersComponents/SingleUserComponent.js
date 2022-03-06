import React, { useEffect } from 'react';
// import LoadingStatus from "../StatusComponents/LoadingSatus";
// import ErrorStatus from "../StatusComponents/ErrorStatus";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/userActions';
import { getPosts } from '../../redux/actions/postsActions';
import { useParams, Link } from 'react-router-dom';
import styles from '../UsersComponents/UsersComponent.module.css';
import PostCard from '../PostsComponents/PostCardComponent';

export const SingleUser = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const fetchData = async () => {
        await dispatch(getPosts());
        await dispatch(getUsers());
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log("single user");
    const users = useSelector((state) => state.users.users);
    const [user] = users.filter((user) => user.id.toString() === userId);

    console.log(users, userId, user);

    let posts = useSelector((state) => state.posts.posts);

    console.log(posts);
    const postsByUser = posts.filter((post) => post.userId.toString() === userId);
    // тут вызвать фильтр постов по пользователям переписать
    

    console.log(postsByUser);

    return (
        <>
            <h3> Posts by {user.name}:</h3>
            {postsByUser &&
                postsByUser.map((post) => (
                    <Link to={`posts/${post.id}`} className={styles.itemLink} key={post.id}>
                        <PostCard key={post.id} post={post} />
                    </Link>
                ))}
        </>
    );
};
