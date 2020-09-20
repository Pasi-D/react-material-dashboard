/**
 * A wrapper for <Route>
 * Redirects to Login if not authenticated
 */
import React, { ComponentClass, FC, useRef } from "react";
import { Route, Redirect } from "react-router";

import { authenticated } from "session/auth";
interface IPrivateRouteProps {
    isAuthenticated?: boolean; // Optional prop passed to check if authenticated.
    component: ComponentClass<any, any> | FC<any>;
    path: string;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
    isAuthenticated,
    component: Component,
    ...rest
}: IPrivateRouteProps) => {
    const isValidAuth = useRef(authenticated || isAuthenticated);
    return (
        <Route
            {...rest}
            render={(props) =>
                isValidAuth.current ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect
                        to={{ pathname: "/login", state: { from: props.location } }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
