import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import AppBar from "components/layout/AppBar";
import Copyright from "components/layout/Footer/Copyright";

import Logo from "assets/images/logo.svg";

import useStyle from "assets/styles/landing";

const Landing: FC = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBar type="Top" isAuthenticated={false} />
            <div className={classes.appBarSpacer} />
            <main className={classes.rootContainer}>
                <div className={classes.container}>
                    <div className={classes.header}>
                        <div className={classes.innerHeader}>
                            <img src={Logo} className={classes.logo} alt="Logo" />
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}>
                                React Material Dashboard
                            </Typography>
                        </div>
                        {/* Waves Container */}
                        <div>
                            <svg
                                className={classes.waves}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 24 150 28"
                                preserveAspectRatio="none"
                                shapeRendering="auto">
                                <defs>
                                    <path
                                        id="gentle-wave"
                                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                    />
                                </defs>
                                <g className={classes.parallax}>
                                    <use
                                        xlinkHref="#gentle-wave"
                                        x="48"
                                        y="0"
                                        fill="rgba(255,255,255,0.7"
                                    />
                                    <use
                                        xlinkHref="#gentle-wave"
                                        x="48"
                                        y="3"
                                        fill="rgba(255,255,255,0.5)"
                                    />
                                    <use
                                        xlinkHref="#gentle-wave"
                                        x="48"
                                        y="5"
                                        fill="rgba(255,255,255,0.3)"
                                    />
                                    <use
                                        xlinkHref="#gentle-wave"
                                        x="48"
                                        y="7"
                                        fill="#fff"
                                    />
                                </g>
                            </svg>
                        </div>
                        {/* Waves end */}
                    </div>
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=xXZang3tsuXx&repo=react-material-dashboard&type=star&count=true"
                        frameBorder="0"
                        scrolling="0"
                        width="150"
                        height="20"
                        title="GitHub"></iframe>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </main>
        </div>
    );
};

export default Landing;
