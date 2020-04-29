/**
 * ------ useSnackbar custom react hook -------
 *
 * This hook is used to trigger snack/toast in the application.
 *
 * Methods to use
 * ------------------------------------------
 *```
 *     import useSnackbar from "components/layout/Snackbar";
 *
 *     ... (Inside Functional component)
 *     const { setAlert } = useSnackbar();
 *
 *     setAlert({CONFIGURATIONS});
 *     ...
 *```
 * You can find/modify configurations inside "./SnackbarContext.tsx"
 * */
import { useContext } from "react";

import { SnackbarContext } from "./SnackbarContext";

export const useSnackbar = () => useContext(SnackbarContext);
