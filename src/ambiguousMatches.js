import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const AmbiguousExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/about">About US (static)</Link>
                </li>
                <li>
                    <Link to="/company">Company (static)</Link>
                </li>
                <li>
                    <Link to="/kim">Kim (dynamic)</Link>
                </li>
                <li>
                    <Link to="/chris">Chris (dynamic)</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/about" component={About} />
                <Route path="/company" component={Company} />
                <Route path="/:user" component={User} />
            </Switch>
        </div>
    </Router>
);

const About = () => <h2>About</h2>;

const Company = () => <h2>Company</h2>;

const User = ({ match }) => (
    <div>
        <h2>
            User: {match.params.user}
        </h2>
    </div>
);

export default AmbiguousExample;