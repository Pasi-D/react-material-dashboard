/**
 * Landing page styles
 */
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBarSpacer: theme.mixins.toolbar,
        container: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            textAlign: "center"
        },
        header: {
            position: "relative",
            textAlign: "center",
            background: `linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)`,
            color: "white"
        },
        innerHeader: {
            height: "65vh",
            width: "100%",
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
        },
        logo: {
            width: "80px",
            fill: "white",
            display: "inline-block",
            paddingRight: "15px",
            verticalAlign: "middle"
        },
        parallax: {
            "& > use": {
                animation: `$move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite`
            },
            "& > use:nth-child(1)": {
                animationDelay: "-2s",
                animationDuration: "7s"
            },
            "& > use:nth-child(2)": {
                animationDelay: "-3s",
                animationDuration: "10s"
            },
            "& > use:nth-child(3)": {
                animationDelay: "-4s",
                animationDuration: "13s"
            },
            "& > use:nth-child(4)": {
                animationDelay: "-5s",
                animationDuration: "20s"
            }
        },
        "@keyframes move-forever": {
            "0%": {
                transform: "translate3d(-90px, 0, 0)"
            },
            "100%": {
                transform: "translate3d(85px, 0, 0)"
            }
        },
        root: {
            display: "flex"
        },
        rootContainer: {
            flexGrow: 1,
            height: "100%",
            overflow: "hidden"
        },
        title: {
            fontWeight: 300,
            letterSpacing: "2px",
            fontSize: "40px"
        },
        waves: {
            position: "relative",
            width: "100%",
            height: "15vh",
            marginBottom: "-7px",
            /*Fix for safari gap*/
            minHeight: "100px",
            maxHeight: "150px"
        }
    })
);

export default useStyles;
