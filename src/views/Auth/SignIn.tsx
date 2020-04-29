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
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};

export default SignIn;
