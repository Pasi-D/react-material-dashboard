/**
 * Admin Dashboard Layout
 */
import React, { FC } from "react";
import { Route, useRouteMatch, Switch, Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";

import useStyles from "assets/styles/Dashboard";

import { adminDashboardRoutes as routes, RouteItem } from "views/Dashboard/routes";

const AdminLayout: FC = () => {
    const classes = useStyles();

    let { path } = useRouteMatch();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Switch>
                {routes.map((routeItem: RouteItem, key: number) => {
                    return routeItem.sidebar ? (
                        <Route
                            exact
                            path={`${path}${routeItem.path}`}
                            component={() => (
                                <routeItem.component routeName={routeItem.name} />
                            )}
                            key={key}
                        />
                    ) : (
                        <Route
                            path={`${path}${routeItem.path}`}
                            component={() => (
                                <routeItem.component routeName={routeItem.name} />
                            )}
                            key={key}
                        />
                    );
                })}
                {/* Redirect to "URL/#/dashboard" on invalid paths entered as "URL/#/dashboard/INVALID" */}
                <Redirect from="/dashboard" to="/dashboard" />
            </Switch>
        </Container>
    );
};

export default AdminLayout;
