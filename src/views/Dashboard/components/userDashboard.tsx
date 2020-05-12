import React, { FC, useEffect } from "react";
import { useAppBar } from "components/layout/AppBar/TopAppBar";

interface IUserDashboardProps extends IComponentCommonProps {}

const UserDashboard: FC<IUserDashboardProps> = ({ routeName }) => {
    const { setHeading } = useAppBar();

    useEffect(() => {
        setHeading(routeName);
    }, [routeName, setHeading]);

    return (
        <div>
            <p>UserDashboard content</p>
        </div>
    );
};

export default UserDashboard;
