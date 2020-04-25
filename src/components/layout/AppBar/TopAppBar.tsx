/**
 * The TopAppBar provides content and actions related to the current screen.
 * It’s used for branding, screen titles, navigation, and actions.
 * Read more: https://material.io/components/app-bars-top
 */
import React, { FC, useState, MouseEvent } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";
import useStyles from "assets/styles/ui/AppBar/topAppBar";

import { logout } from "session/auth";

interface ITopAppBarProps {
    // Drawer open/close triggering function
    openDrawer?: () => void;
    // Flag to indicate drawer opened/closed
    isDrawerToggled?: boolean;
    // Flag to indicate authenticated state. Renders a plain AppBar if not authenticated.
    isAuthenticated?: boolean;
}

const TopAppBar: FC<ITopAppBarProps> = ({
    isAuthenticated,
    isDrawerToggled: open,
    openDrawer
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isProfileMenuOpen = Boolean(anchorEl);

    const history = useHistory();

    const handleProfileMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    const handleUserLogout = () => {
        logout(history, "/");
    };

    const classes = useStyles();
    return (
        <AppBar
            position="absolute"
            className={
                isAuthenticated
                    ? clsx(classes.appBar, open && classes.appBarShift)
                    : classes.appBar
            }>
            <Toolbar className={classes.toolbar}>
                {isAuthenticated && (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={openDrawer}
                            className={clsx(
                                classes.menuButton,
                                open && classes.menuButtonHidden
                            )}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            className={classes.title}>
                            {"TODO: Display Heading"}
                        </Typography>
                        <section className={classes.rightToolbar}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={handleProfileMenu}>
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={isProfileMenuOpen}
                                onClose={handleProfileMenuClose}>
                                <MenuItem onClick={handleProfileMenuClose}>Help</MenuItem>
                                <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
                            </Menu>
                        </section>
                    </>
                )}
                {!isAuthenticated && (
                    <section className={classes.rightToolbar}>
                        <Button
                            component={RouterLink}
                            className={classes.loginButton}
                            color="inherit"
                            to="/login">
                            Login
                        </Button>
                    </section>
                )}
            </Toolbar>
        </AppBar>
    );
};

TopAppBar.defaultProps = {
    isAuthenticated: false,
    isDrawerToggled: true
};

export default TopAppBar;
