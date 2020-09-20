/**
 * Custom Progress Indicator
 *
 * Usage:
 *
 * Ex:
 *
 * import ProgressIndicator from "components/ui/progressIndicator";
 * ....
 * <ProgressIndicator type="linear" />
 * ...
 */
import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import CircularProgress, {
    CircularProgressProps
} from "@material-ui/core/CircularProgress";
import LinearProgress, { LinearProgressProps } from "@material-ui/core/LinearProgress";

interface BaseProgressIndicatorProps {
    /**
     * Type of the Progress Indicator.
     * This can be "circular" or "linear"
     */
    type: "circular" | "linear";
}

interface CircularProgressIndicatorProps
    extends CircularProgressProps,
        BaseProgressIndicatorProps {}

interface LinearProgressIndicatorProps
    extends LinearProgressProps,
        BaseProgressIndicatorProps {}

type ProgressIndicatorProps =
    | CircularProgressIndicatorProps
    | LinearProgressIndicatorProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            alignItems: "center",
            "& > * + *": {
                marginTop: theme.spacing(1)
            }
        }
    })
);

const ProgressIndicator: FC<ProgressIndicatorProps> = ({ type }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {type === "circular" ? <CircularProgress /> : <LinearProgress />}
        </div>
    );
};

export default ProgressIndicator;
