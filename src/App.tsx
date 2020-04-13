import React, { FC } from "react";
import { BrowserRouter as Router, HashRouter, Switch, Redirect } from "react-router-dom";
import "assets/css/App.css";

import AuthRoute from "components/routes/AuthRoute";

import Landing from "views/Landing";

import { authenticated } from "session/auth";

/* Core Components */

import Login from "views/Auth/SignIn";
import PrivateRoute from "components/routes/PrivateRoute";

import Dashboard from "views/Dashboard";

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <HashRouter>
                    <Switch>
                        <AuthRoute
                            exact
                            path="/"
                            component={Landing}
                            isAuthenticated={authenticated}
                        />
                        <AuthRoute
                            exact
                            path="/login"
                            component={Login}
                            isAuthenticated={authenticated}
                        />
                        <PrivateRoute
                            path="/dashboard"
                            component={Dashboard}
                            isAuthenticated={authenticated}
                        />
                        {/* Redirect to "URL/#/login" on invalid paths entered as "URL/#/INVALID" */}
                        <Redirect from="/" to="/login" />
                        {/* Redirect to "URL/#/login" on invalid paths entered as "URL/#/login/INVALID" */}
                        <Redirect from="/login" to="/login" />
                    </Switch>
                </HashRouter>
            </Router>
        </div>
    );
};

export default App;
