/**
 * Top App Bar styles
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        appBarShift: {
            marginLeft: DRAWER_WIDTH,
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        loginButton: {
            float: "right"
        },
        // This group of buttons will be aligned to the right
        rightToolbar: {
            marginLeft: "auto",
            marginRight: -12
        },
        menuButton: {
            marginRight: 36
        },
        menuButtonHidden: {
            display: "none"
        },
        title: {
            flexGrow: 1,
            textAlign: "left"
        },
        toolbar: {
            paddingRight: 24 // Keep right padding when drawer closed
        }
    })
);

export default useStyles;
