import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoadingStatus from '../components/StatusComponents/LoadingStatus';
import ErrorStatus from '../components/StatusComponents/ErrorStatus';
import NoResultsFound from '../components/StatusComponents/NoResultsFound';

import { getUsers } from '../redux/actions/userActions';
import UserCard from '../components/UsersComponents/UserCardComponent';
import styles from './UsersPage.module.css';

export const Users = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.users);
    const message = 'Sorry, Something went terribly wrong. Fail to fetch users data.';
    
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            <h2>Users</h2>
            {loading && <LoadingStatus />}
            {!users && !loading && <NoResultsFound message={'Sorry, no users found'} />}
            {error && !loading && <ErrorStatus error={error} message={message} />}
            {!loading &&
                !error &&
                users &&
                users.map((user) => (
                    <Link to={`/users/${user.id}`} className={styles.itemLink} key={user.id}>
                        <UserCard key={user.id} user={user} />
                    </Link>
                ))}
        </>
    );
};
