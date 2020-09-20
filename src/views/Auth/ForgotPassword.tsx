import React, { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { withFormik, FormikProps } from "formik";
import { object, string } from "yup";

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import AppBar from "components/layout/AppBar";
import Copyright from "components/layout/Footer/Copyright";

import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";

import { Link as RouterLink } from "react-router-dom";

import useStyles from "assets/styles/Auth/authStyles";

interface IFormProps extends WithTranslation {
    email?: string;
    handlePasswordResetting: (email: string) => void;
}

interface IFormValues {
    email: string;
}

const RenderForm: FC<IFormProps & FormikProps<IFormValues>> = props => {
    const classes = useStyles();

    const { values, touched, errors, handleSubmit, handleBlur, handleChange, t } = props;

    return (
        <div className={classes.root}>
            <AppBar type="Top" isAuthenticated={false} />
            <Container component="main" maxWidth="sm">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <VpnKeyOutlinedIcon />
                    </Avatar>
                    <Typography component="h2" variant="h6">
                        {t("forms.forgotPassword.title")}
                    </Typography>
                    <Typography component="p" variant="subtitle1">
                        {t("forms.forgotPassword.resetPasswordInstruction")}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            helperText={
                                touched.email ? t(`validations..${errors.email}`, "") : ""
                            }
                            error={touched.email && Boolean(errors.email)}
                            label={t("forms.forgotPassword.email")}
                            name="email"
                            autoComplete="email"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}>
                            {t("forms.forgotPassword.sendLink")}
                        </Button>
                        <Typography component="p" variant="subtitle1">
                            {t("forms.forgotPassword.or")}{" "}
                            <Link component={RouterLink} to="/login" variant="subtitle1">
                                {" "}
                                {t("forms.forgotPassword.cancel")}
                            </Link>
                        </Typography>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};

const ForgotPasswordForm = withFormik<IFormProps, IFormValues>({
    mapPropsToValues({ email }) {
        return {
            email: email || ""
        };
    },
    validationSchema: object().shape({
        email: string()
            .email("Invalid email")
            .required("Email is required")
    }),
    handleSubmit(values, { props }) {
        props.handlePasswordResetting(values.email);
    }
})(RenderForm);

const TranslatedForgotPassword = withTranslation()(ForgotPasswordForm);

export default TranslatedForgotPassword;
