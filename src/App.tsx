import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, HashRouter, Switch, Redirect } from "react-router-dom";
import "assets/css/App.css";

import { authenticated } from "session/auth";

import AuthRoute from "components/routes/AuthRoute";
import PrivateRoute from "components/routes/PrivateRoute";

import ProgressIndicator from "components/ui/progressIndicator";

const Landing = lazy(() => import("views/Landing"));

/* Core Components */
const Login = lazy(() => import("views/Auth/SignIn"));
const Dashboard = lazy(() => import("views/Dashboard"));

const App: FC = () => {
    return (
        <div className="App">
            <Router>
                <HashRouter>
                    <Suspense fallback={<ProgressIndicator type="linear" />}>
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
                    </Suspense>
                </HashRouter>
            </Router>
        </div>
    );
};

export default App;
