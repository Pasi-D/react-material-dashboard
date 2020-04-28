/**
 * SignUpForm HOC wrapped in Formik
 * form-level validations of SignUpForm is done here.
 */

import React from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { withFormik, FormikProps } from "formik";
import { object, string } from "yup";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";

import { Link as RouterLink } from "react-router-dom";

import useStyles from "assets/styles/Auth/authStyles";

interface IFormProps extends WithTranslation {
    firstName?: string;
    lastName?: string;
    email?: string;
    agreedTOC?: boolean;
    allowxtraEmails?: boolean;
    handleUserCreation: (signUpData: object) => void;
}

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string;
    agreedTOC: boolean;
    allowxtraEmails: boolean;
}

const RenderForm: React.FC<IFormProps & FormikProps<IFormValues>> = props => {
    const classes = useStyles();
    const { values, touched, errors, handleSubmit, handleBlur, handleChange, t } = props;
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="firstName"
                        variant="outlined"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                            touched.firstName
                                ? t(`validations.signupForm.${errors.firstName}`, "")
                                : ""
                        }
                        error={touched.firstName && Boolean(errors.firstName)}
                        required
                        fullWidth
                        id="firstName"
                        label={t("forms.signup.firstName")}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="lastName"
                        name="lastName"
                        variant="outlined"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                            touched.lastName
                                ? t(`validations.signupForm.${errors.lastName}`, "")
                                : ""
                        }
                        error={touched.lastName && Boolean(errors.lastName)}
                        required
                        fullWidth
                        id="lastName"
                        label={t("forms.signup.lastName")}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        id="email"
                        label={t("forms.signup.email")}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                            touched.email
                                ? t(`validations.signupForm.${errors.email}`, "")
                                : ""
                        }
                        error={touched.email && Boolean(errors.email)}
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={values.allowxtraEmails}
                                id="allowxtraEmails"
                                name="allowxtraEmails"
                                color="primary"
                                onChange={handleChange}
                            />
                        }
                        label={t("forms.signup.marketingPromotionEmails")}
                    />
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    {t("general.signup")}
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link component={RouterLink} to="/login" variant="body2">
                            {t("forms.signup.alreadyHaveAccount")}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

const SignUpForm = withFormik<IFormProps, IFormValues>({
    mapPropsToValues({ firstName, lastName, email, agreedTOC, allowxtraEmails }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            agreedTOC: agreedTOC || false,
            allowxtraEmails: allowxtraEmails || false
        };
    },
    validationSchema: object().shape({
        firstName: string().required("Please enter the Firstname"),
        lastName: string().required("Please enter the Lastname"),
        email: string()
            .email("Invalid email")
            .required("Email is required")
    }),
    handleSubmit(values, { props }) {
        props.handleUserCreation(values);
    }
})(RenderForm);

const TranslatedSignUpForm = withTranslation()(SignUpForm);

export default TranslatedSignUpForm;
