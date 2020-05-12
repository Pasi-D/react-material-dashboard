/**
 * Sidebar/Drawer layout component
 */
import React, { FC } from "react";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import clsx from "clsx";
import useStyles from "assets/styles/ui/sidebar";

interface ISidebarProps {
    isDrawerToggled: boolean;
    closeDrawer: () => void;
    navItems: React.FC<any>;
}

const Sidebar: FC<ISidebarProps> = ({ isDrawerToggled: open, closeDrawer, navItems }) => {
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
            <Divider />
            <List component={navItems} />
        </Drawer>
    );
};

export default Sidebar;
