/**
 * LoginForm HOC wrapped in Formik
 * form-level validations of LoginForm is done here.
 */

import React, { FC, MouseEvent, useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { withFormik, FormikProps } from "formik";
import { object, string } from "yup";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import useStyles from "assets/styles/Auth/authStyles";

import { ILoginParams } from "session/auth";

import { Link as RouterLink } from "react-router-dom";

interface IFormProps extends WithTranslation {
    username?: string;
    password?: string;
    remember?: boolean;
    handleUserAuthentication: (loginData: ILoginParams) => void;
    /* Flag to indicate loading state of the form */
    loading: boolean;
}
interface IFormValues extends ILoginParams {
    username: string;
    password: string;
    remember: boolean;
}

const RenderForm: FC<IFormProps & FormikProps<IFormValues>> = props => {
    const classes = useStyles();

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const handleClickShowPassword = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {
        values,
        touched,
        errors,
        handleSubmit,
        handleBlur,
        handleChange,
        t,
        loading
    } = props;

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                id="username"
                name="username"
                label={t("forms.login.username")}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                    touched.username
                        ? t(`validations.loginForm.${errors.username}`, "")
                        : ""
                }
                error={touched.username && Boolean(errors.username)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoComplete="username"
            />
            <TextField
                id="password"
                name="password"
                type={passwordVisibility ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                    touched.password
                        ? t(`validations.loginForm.${errors.password}`, "")
                        : ""
                }
                error={touched.password && Boolean(errors.password)}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                label={t("forms.login.password")}
                autoComplete="password"
            />
            <FormControlLabel
                control={<Checkbox value={values.remember} color="primary" />}
                label={t("forms.login.rememberMe")}
            />
            <div className={classes.wrapper}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    className={classes.submit}>
                    {t("general.login")}
                </Button>
                {loading && (
                    <CircularProgress size={24} className={classes.buttonProgress} />
                )}
            </div>
            <Grid container>
                <Grid item xs>
                    <Link component={RouterLink} to="/forgot-password" variant="body2">
                        {t("general.forgotPassword")}
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} to="/signup" variant="body2">
                        {t("forms.login.Dont_have_an_account_Sign_Up")}
                    </Link>
                </Grid>
            </Grid>
        </form>
    );
};

const LoginForm = withFormik<IFormProps, IFormValues>({
    mapPropsToValues({ username, password, remember }) {
        return {
            username: username || "",
            password: password || "",
            remember: remember || false
        };
    },
    validationSchema: object().shape({
        username: string().required("Username is Required"),
        password: string().required("Password is Required")
    }),
    handleSubmit(values, { props }) {
        props.handleUserAuthentication(values);
    }
})(RenderForm);

const TranslatedLoginForm = withTranslation()(LoginForm);

export default TranslatedLoginForm;
