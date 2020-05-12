/**
 * Dashboar Navigational Routes
 *
 * Remark:
 *    On Adding routes with same identities in id,
 *    For example: "pay-runs/:id" & "pay-runs/new",
 *    Place the latter (i.e "pay-runs/new") first before the arbitary id route.
 */
import { ComponentClass, FC } from "react";

import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

/* Admin core components */
import AdminDashboard from "views/Dashboard/components/adminDashboard";

/* User core components */
import UserDashboard from "views/Dashboard/components/userDashboard";

/* Drawer Icons */
import DashboardIcon from "@material-ui/icons/Dashboard";

interface IRouteItemBasic {
    /**
     * Path to the route
     */
    path: string;
    /**
     * Name of the route
     */
    name: string;
    /**
     * Component to be rendered
     */
    component: ComponentClass<any, any> | FC<any>;
}

interface IRoutesOnDrawer extends IRouteItemBasic {
    /**
     * Flag to indicate whether the route is displayed in sidebar drawer
     * If true icon is mandatory.
     */
    sidebar: true;
    /**
     * Icon to be rendered in sidebar drawer
     */
    icon: OverridableComponent<SvgIconTypeMap>;
}

interface IRoutesArbitary extends IRouteItemBasic {
    /**
     * Flag to indicate whether the route is displayed in sidebar drawer
     * If true icon is mandatory.
     */
    sidebar: false;
    /**
     * Icon to be rendered in sidebar drawer
     */
    icon: never;
}

export type RouteItem = IRouteItemBasic & (IRoutesOnDrawer | IRoutesArbitary);

export const adminDashboardRoutes: Array<RouteItem> = [
    {
        path: "",
        name: "Dashboard",
        component: AdminDashboard,
        sidebar: true,
        icon: DashboardIcon
    }
];

export const userDashboardRoutes: Array<RouteItem> = [
    {
        path: "",
        name: "Dashboard",
        component: UserDashboard,
        sidebar: true,
        icon: DashboardIcon
    }
];
