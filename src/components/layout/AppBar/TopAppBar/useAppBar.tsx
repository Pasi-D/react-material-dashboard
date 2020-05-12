/**
 * ------------ useAppBar custom react hook -----------------
 *
 * Description:   A Custom hook used to update the content on
 *                AppBar/TopAppbar component.
 *
 * Methods to use
 * -------------------------------------------
 * ```
 *    import useAppBar from "src/components/layout/AppBar/TopAppBar"
 *
 *    ...(Inside functional component)
 *    const { setHeading, heading } = useAppBar();
 *
 *    setHeading("Dashboard");
 * ```
 * You can modify configurations inside "./TopAppbarContext"
 */
import { useContext } from "react";

import { TopAppBarContext } from "./TopAppBarContext";

export const useAppBar = () => useContext(TopAppBarContext);
