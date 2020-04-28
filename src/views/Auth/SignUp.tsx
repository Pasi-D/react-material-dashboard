import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import Typography from "@material-ui/core/Typography";

import AppBar from "components/layout/AppBar";
import Copyright from "components/layout/Footer/Copyright";
import SignUpForm from "./components/signUpForm";

import useStyles from "assets/styles/Auth/authStyles";

interface ISignUpProps {}

const SignUp: FC<ISignUpProps> = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const signUpUser = (signUpData: object) => {
        console.log("signUpData :", signUpData);
    };
    return (
        <div className={classes.root}>
            <AppBar type="Top" isAuthenticated={false} />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <PersonAddOutlinedIcon />
                    </Avatar>
                    <Typography component="h2" variant="h6">
                        {t("general.signup")}
                    </Typography>
                    <SignUpForm handleUserCreation={signUpUser} />
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};

export default SignUp;
