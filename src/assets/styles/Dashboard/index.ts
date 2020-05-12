/**
 * Dashboard styles
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex"
        },
        appBarSpacer: theme.mixins.toolbar,
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        },
        content: {
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
        }
    })
);

export default useStyles;
