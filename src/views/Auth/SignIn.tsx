import React, { FC, useState } from "react";
import { useSnackbar } from "components/layout/Snackbar";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { pick } from "lodash";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import AppBar from "components/layout/AppBar";
import Copyright from "components/layout/Footer/Copyright";
import LoginForm from "./components/loginForm";

import { ILoginParams, login } from "session/auth";

import useStyles from "assets/styles/Auth/authStyles";

interface ISignInProps {}

const BackgroundPattern: FC = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.waveContainer}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className={classes.waveContent}>
                <path
                    fill="#3f51b5"
                    fillOpacity="1"
                    d="M0,128L80,160C160,192,320,256,480,261.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            {children}
        </div>
    );
};

const SignIn: FC<ISignInProps> = () => {
    const [loading, setLoading] = useState(false);

    const classes = useStyles();
    const { setAlert } = useSnackbar();
    const history = useHistory();
    const { t } = useTranslation();

    const authenticateUser = async (loginData: ILoginParams) => {
        const user: ILoginParams = pick(loginData, ["username", "password"]);
        try {
            setLoading(true);
            const response = await login(user);
            setLoading(false);
            history.push({ pathname: "/dashboard", state: response });
            setAlert({ open: true, type: "success", message: "Successfully logged in" });
        } catch (error) {
            setLoading(false);
            setAlert({ open: true, type: "error", message: error.message });
        }
    };

    return (
        <BackgroundPattern>
            <div className={classes.root}>
                <AppBar type="Top" isAuthenticated={false} />
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h2" variant="h6">
                            {t("welcome")}
                        </Typography>
                        <LoginForm
                            handleUserAuthentication={authenticateUser}
                            loading={loading}
                        />
                    </div>
                </Container>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </BackgroundPattern>
    );
};

export default SignIn;
