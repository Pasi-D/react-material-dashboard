/**
 * Auth screens related styles
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main
        },
        buttonProgress: {
            color: green[800],
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -8,
            marginLeft: -12
        },
        form: {
            width: "100%",
            marginTop: theme.spacing(1)
        },
        paper: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        root: {
            display: "flex"
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        },
        wrapper: {
            margin: theme.spacing(1),
            position: "relative"
        }
    })
);

export default useStyles;
