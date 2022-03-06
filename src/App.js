import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { Users } from './pages/UsersPage';
import { Posts } from './pages/PostsPage';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './components/Navbar/index';
import { SingleUser } from './components/UsersComponents/SingleUserComponent';
import { SinglePost } from './components/PostsComponents/SinglePostComponent';


import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/actions/postsActions';
import { getCommentsByPostId } from './redux/actions/commentsActions';
import { getUsers } from './redux/actions/userActions';
import React, { useEffect} from 'react';

export default function App() {
     const dispatch = useDispatch();
 {const fetchData = async () => {
     await dispatch(getPosts());
     await dispatch(getCommentsByPostId());
     await dispatch(getUsers());
 };

 useEffect(() => {
     fetchData();
 }, []);
     const stat2 = useSelector((state) => state);
     console.log('stat2', stat2);
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
