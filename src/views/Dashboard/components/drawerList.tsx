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

// Admin Related Drawer Navigational routes
export const AdminNavigationItems: FC = () => {
    const { url } = useRouteMatch();
    const { t } = useTranslation();
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
                            <ListItemIcon>{<routeItem.icon />}</ListItemIcon>
                            <ListItemText primary={t(`drawer.${routeItem.name}`)} />
                        </ListItem>
                    );
                })}
        </>
    );
};

// User Related Drawer Navigational routes
export const UserNavigationItems: FC = () => {
    const { url } = useRouteMatch();
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
                            <ListItemIcon>{<routeItem.icon />}</ListItemIcon>
                            <ListItemText primary={routeItem.name} />
                        </ListItem>
                    );
                })}
        </>
    );
};
