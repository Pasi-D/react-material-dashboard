/**
 * Sidebar/Drawer layout component
 */
import React, { FC } from "react";

import {
    Avatar,
    Collapse,
    Divider,
    Drawer,
    IconButton,
    List,
    Typography
} from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { startCase } from "lodash";

import { useSession } from "session/auth";

import clsx from "clsx";
import useStyles from "assets/styles/ui/sidebar";

type SidebarProps = {
    isDrawerToggled: boolean;
    closeDrawer: () => void;
    navItems: React.FC<any>;
};

type SidebarProfile = {
    display: boolean;
};

const Profile: FC<SidebarProfile> = ({ display }) => {
    const classes = useStyles();

    const { session } = useSession();

    const getUserFirstLetter = () => {
        if (session && session.fullName) {
            return (session.fullName as string).charAt(0);
        }
        return "-";
    };

    const getProfileRole = () => {
        if (session && session.role) {
            return startCase(session.role);
        }
        return "";
    };

    return (
        <Collapse in={display}>
            <div className={classes.profileRoot}>
                <Avatar alt="Person" className={classes.profileAvatar}>
                    {getUserFirstLetter()}
                </Avatar>
                <Typography className={classes.profileName} variant="h6">
                    {`${session.fullName}`}
                </Typography>
                <Typography variant="body2">{getProfileRole()}</Typography>
            </div>
        </Collapse>
    );
};

const Sidebar: FC<SidebarProps> = ({ isDrawerToggled: open, closeDrawer, navItems }) => {
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
            }}
            open={open}>
            <div className={classes.toolbarIcon}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Profile display={open} />
            <Divider />
            <List component={navItems} />
        </Drawer>
    );
};

export default Sidebar;
