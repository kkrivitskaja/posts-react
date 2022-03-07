import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MainPage } from './pages/MainPage';
import { Users } from './pages/UsersPage';
import { Posts } from './pages/PostsPage';
import { PageNotFound } from './pages/PageNotFound';

import { Navbar } from './components/Navbar/index';
import { SingleUser } from './components/UsersComponents/SingleUserComponent';
import { SinglePost } from './components/PostsComponents/SinglePostComponent';

import { getPosts } from './redux/actions/postsActions';
import { getUsers } from './redux/actions/userActions';
import './index.css';

export default function App() {
    const dispatch = useDispatch();
    {
        const fetchData = async () => {
            await dispatch(getPosts());
            await dispatch(getUsers());
        };

        useEffect(() => {
            fetchData();
        }, []);
    }

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route exact path="/users/:userId">
                        <SingleUser />
                    </Route>
                    <Route exact path="/posts">
                        <Posts />
                    </Route>
                    <Redirect from="/users/posts/:postId" to="/posts/:postId" />
                    <Route path="/posts/:postId">
                        <SinglePost />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
