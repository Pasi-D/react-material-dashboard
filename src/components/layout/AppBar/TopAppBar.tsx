/**
 * The TopAppBar provides content and actions related to the current screen.
 * It’s used for branding, screen titles, navigation, and actions.
 * Read more: https://material.io/components/app-bars-top
 */
import React, { FC, useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, Link as RouterLink, useLocation } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Translate";
import MenuIcon from "@material-ui/icons/Menu";

import { LANGUAGES } from "i18n";

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
    const { t, i18n } = useTranslation();

    const [profileMenu, setProfileMenu] = useState<null | HTMLElement>(null);
    const [languageMenu, setLanguageMenu] = useState<null | HTMLElement>(null);

    const history = useHistory();
    let location = useLocation();

    const handleProfileMenu = (event: MouseEvent<HTMLElement>) => {
        setProfileMenu(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setProfileMenu(null);
    };

    const handleLanguageMenuClick = (event: MouseEvent<HTMLElement>) => {
        setLanguageMenu(event.currentTarget);
    };

    const handleLanguageChange = (language: string) => {
        handleLanguageMenuClose();
        i18n.changeLanguage(language);
    };

    const handleLanguageMenuClose = () => {
        setLanguageMenu(null);
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
                                anchorEl={profileMenu}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={Boolean(profileMenu)}
                                onClose={handleProfileMenuClose}>
                                <MenuItem onClick={handleProfileMenuClose}>Help</MenuItem>
                                <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
                            </Menu>
                        </section>
                    </>
                )}
                {!isAuthenticated && (
                    <section className={classes.rightToolbar}>
                        <Tooltip
                            title={t("general.changeLanguage") || "Change Language"}
                            enterDelay={300}>
                            <Button
                                color="inherit"
                                aria-owns={languageMenu ? "language-menu" : undefined}
                                aria-label={t("general.changeLanguage")}
                                onClick={handleLanguageMenuClick}
                                data-ga-event-category="header"
                                data-ga-event-action="language">
                                <LanguageIcon />
                                <span className={classes.language}>
                                    {
                                        LANGUAGES.filter(
                                            language => language.code === i18n.language
                                        )[0].text
                                    }
                                </span>
                                <ExpandMoreIcon fontSize="small" />
                            </Button>
                        </Tooltip>
                        <Menu
                            id="language-menu"
                            anchorEl={languageMenu}
                            open={Boolean(languageMenu)}
                            onClose={handleLanguageMenuClose}>
                            {LANGUAGES.map(language => (
                                <MenuItem
                                    key={language.code}
                                    selected={i18n.language === language.code}
                                    lang={language.code}
                                    onClick={() => {
                                        handleLanguageChange(language.code);
                                    }}>
                                    {language.text}
                                </MenuItem>
                            ))}
                            <Box my={1}>
                                <Divider />
                            </Box>
                            <MenuItem
                                component="a"
                                data-no-link="true"
                                href="https://github.com/xXZang3tsuXx/react-material-dashboard"
                                rel="noopener nofollow"
                                target="_blank"
                                key={i18n.language}
                                lang={i18n.language}
                                hrefLang="en"
                                onClick={handleLanguageMenuClose}>
                                {t("helpToTranslate")}
                            </MenuItem>
                        </Menu>
                        {location.pathname !== "/login" && (
                            <Button
                                component={RouterLink}
                                className={classes.loginButton}
                                color="inherit"
                                to="/login">
                                {t("general.login", "Login")}
                            </Button>
                        )}
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
