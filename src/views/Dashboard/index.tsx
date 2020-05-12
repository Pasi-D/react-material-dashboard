import React, { FC, useState, useRef, useEffect } from "react";

import Appbar from "components/layout/AppBar";
import Sidebar from "components/layout/Sidebar";

import TopAppbarCtx from "components/layout/AppBar/TopAppBar/TopAppBarContext";

import { AdminNavigationItems, UserNavigationItems } from "./components/drawerList";

import AdminLayout from "./layouts/adminLayout";
import UserLayout from "./layouts/userLayout";

import { isAdminUser, isAdminType, authenticated } from "session/auth";

import useStyles from "assets/styles/Dashboard";

interface IDashboardProps {}

const Dashboard: FC<IDashboardProps> = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const isAdmin = useRef(isAdminType);

    useEffect(() => {
        isAdmin.current = isAdminUser();
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            {/* TODO: There might be a memory leak occuring doing in this pattern. Fix this later */}
            <TopAppbarCtx>
                <Appbar
                    type="Top"
                    isAuthenticated={authenticated}
                    isDrawerToggled={open}
                    openDrawer={handleDrawerOpen}
                />
                <Sidebar
                    closeDrawer={handleDrawerClose}
                    isDrawerToggled={open}
                    navItems={
                        isAdmin.current ? AdminNavigationItems : UserNavigationItems
                    }
                />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    {isAdmin.current ? <AdminLayout /> : <UserLayout />}
                </main>
            </TopAppbarCtx>
        </div>
    );
};

export default Dashboard;
