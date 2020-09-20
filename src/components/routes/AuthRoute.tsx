/**
 * A wrapper for <Route />
 * Redirects to Dashboard if authenticated
 * Encapsulate login related routes that needs to be redirected to dashboard if authenticated
 * (login/signup) with this component.
 */
import React, { ComponentClass, FC, useRef } from "react";
import { Route, Redirect } from "react-router";

import { authenticated } from "session/auth";

interface IAuthRouteProps {
    isAuthenticated?: boolean; // Optional prop passed to check if authenticated.
    component: ComponentClass<any, any> | FC<any>;
    exact?: boolean; // Optional; When true, will only match if the path matches the location.pathname exactly.
    path: string;
}

const AuthRoute: FC<IAuthRouteProps> = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    const isValidAuth = useRef(authenticated && isAuthenticated);

    return (
        <Route
            {...rest}
            render={(props) =>
                isValidAuth.current ? (
                    <Redirect to="/dashboard" />
                ) : (
                    <Component {...props} {...rest} />
                )
            }
        />
    );
};

export default AuthRoute;
