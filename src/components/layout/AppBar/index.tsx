/**
 * AppBar can be either positioned top or bottomed
 * TODO: Bottom AppBar should be displayed for mobile screens
 */
import React, { FC } from "react";

import TopAppBar from "./TopAppBar";
import BottomAppBar from "./BottomAppBar";

interface IAppBarProps {
    /**
     * Drawer open/close triggering function
     */
    openDrawer?: () => void;
    /**
     * Flag to indicate drawer opened/closed
     */
    isDrawerToggled?: boolean;
    /**
     * Flag to indicate authenticated state. Renders a plain AppBar if not authenticated.
     */
    isAuthenticated?: boolean;
    /**
     * Flag to indicate Bottom or Top App Bar
     */
    type: "Bottom" | "Top";
}

const AppBar: FC<IAppBarProps> = ({
    isAuthenticated,
    isDrawerToggled,
    openDrawer,
    type
}) => {
    if (type === "Top") {
        return (
            <TopAppBar
                isAuthenticated={isAuthenticated}
                isDrawerToggled={isDrawerToggled}
                openDrawer={openDrawer}
            />
        );
    } else {
        return <BottomAppBar />;
    }
};

export default AppBar;
