/**
 * Sidebar Drawer List based on the routes
 */
import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { Link as RouterLink, useRouteMatch } from "react-router-dom";

import {
    adminDashboardRoutes as adminRoutes,
    userDashboardRoutes as userRoutes,
    RouteItem
} from "views/Dashboard/routes";

import useStyles from "assets/styles/ui/sidebar";

// Admin Related Drawer Navigational routes
export const AdminNavigationItems: FC = () => {
    const { url } = useRouteMatch();
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <>
            {adminRoutes
                .filter((route: RouteItem) => route.sidebar)
                .map((routeItem: RouteItem, key: number) => {
                    return (
                        <ListItem
                            button
                            component={RouterLink}
                            to={`${url}${routeItem.path}`}
                            replace
                            key={key}>
                            <ListItemIcon>
                                {<routeItem.icon className={classes.drawerItem} />}
                            </ListItemIcon>
                            <ListItemText
                                className={classes.drawerItem}
                                primary={t(`drawer.${routeItem.name}`)}
                            />
                        </ListItem>
                    );
                })}
        </>
    );
};

// User Related Drawer Navigational routes
export const UserNavigationItems: FC = () => {
    const { url } = useRouteMatch();
    const classes = useStyles();
    return (
        <>
            {userRoutes
                .filter((route: RouteItem) => route.sidebar)
                .map((routeItem: RouteItem, key: number) => {
                    return (
                        <ListItem
                            button
                            component={RouterLink}
                            to={`${url}${routeItem.path}`}
                            replace
                            key={key}>
                            <ListItemIcon>
                                {<routeItem.icon className={classes.drawerItem} />}
                            </ListItemIcon>
                            <ListItemText
                                className={classes.drawerItem}
                                primary={routeItem.name}
                            />
                        </ListItem>
                    );
                })}
        </>
    );
};
