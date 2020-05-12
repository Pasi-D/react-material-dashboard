/**
 * Sidebar/Drawer styles
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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
            })
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
