/**
 * Sidebar/Drawer styles
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { DRAWER_WIDTH } from "assets/styles/Dashboard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: DRAWER_WIDTH,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            backgroundColor: fade(theme.palette.primary.main, 1)
        },
        drawerPaperClose: {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9)
            }
        },
        drawerItem: {
            color: "white"
        },
        profileAvatar: {
            width: 60,
            height: 60
        },
        profileName: {
            marginTop: theme.spacing(1),
            fontSize: 16,
            color: "#fff"
        },
        profileRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "fit-content"
        },
        toolbarIcon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar
        }
    })
);

export default useStyles;
