import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { Users } from './pages/UsersPage';
import { Posts } from './pages/PostsPage';
import { Navbar } from './components/Navbar/index';
import { SingleUser } from './components/UsersComponents/SingleUserComponent';
import { SinglePost } from './components/PostsComponents/SinglePostComponent';

export default function App() {
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
                    <Route exact path="/posts/:postId">
                        <SinglePost />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
