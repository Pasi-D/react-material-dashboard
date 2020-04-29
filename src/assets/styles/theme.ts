import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#556cd6"
        },
        secondary: {
            main: "#00a2d5"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#fff"
        }
    }
});

export default theme;
