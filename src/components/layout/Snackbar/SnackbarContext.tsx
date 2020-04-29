/**
 * Snackbar Context
 */
import React, {
    createContext,
    Dispatch,
    SetStateAction,
    FC,
    useState,
    useMemo,
    ReactNode,
    SyntheticEvent
} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface ISnackbarCtxProviderProps {
    children: ReactNode;
}

interface ISnackbarConfigs {
    /**
     * Flag to trigger snackbar open or close.
     */
    open: boolean;
    /**
     * Origin point of the snack/toast
     */
    anchorOrigin?: {
        horizontal: "left" | "center" | "right";
        vertical: "top" | "bottom";
    };
    /**
     * Text message to be displayed in snack/toast
     */
    message: string;
    /**
     * Types of snack/toast
     */
    type: "error" | "info" | "success" | "warning";
    /**
     * Optional Time taken to auto dismiss in milliseconds.
     * Default is set to 3000
     */
    autoHideDuration?: number;
}

type ISnackbarContextProps = {
    setAlert: (
        configs: ISnackbarConfigs
    ) => void | Dispatch<SetStateAction<ISnackbarConfigs>>;
};

// Default auto hide duration of the toast
const AUTO_HIDE_DURATION = 3000;

const initialContext: ISnackbarContextProps = {
    setAlert: () => {}
};

export const SnackbarContext = createContext<ISnackbarContextProps>(initialContext);

const defaultAlertConfigs: ISnackbarConfigs = {
    open: false,
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
    message: "",
    type: "success",
    autoHideDuration: AUTO_HIDE_DURATION
};

function SnackAlert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// Snackbar or toast context-provider
const SnackbarCtxProvider: FC<ISnackbarCtxProviderProps> = ({
    children
}: ISnackbarCtxProviderProps) => {
    // Alert configuration object
    const [configs, setConfigs] = useState(defaultAlertConfigs);

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setConfigs({ ...configs, open: false });
    };

    const setAlert = useMemo(() => setConfigs, [setConfigs]);

    return (
        <SnackbarContext.Provider value={{ setAlert }}>
            <Snackbar
                open={configs.open}
                autoHideDuration={
                    configs.autoHideDuration
                        ? configs.autoHideDuration
                        : AUTO_HIDE_DURATION
                }
                onClose={handleClose}
                anchorOrigin={
                    configs.anchorOrigin
                        ? configs.anchorOrigin
                        : defaultAlertConfigs.anchorOrigin
                }>
                <SnackAlert onClose={handleClose} severity={configs.type}>
                    {configs.message}
                </SnackAlert>
            </Snackbar>
            {children}
        </SnackbarContext.Provider>
    );
};

export default SnackbarCtxProvider;
