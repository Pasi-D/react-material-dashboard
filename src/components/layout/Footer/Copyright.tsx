import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Copyright: FC = () => {
    const { t } = useTranslation();

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {`${t("copyright")} `}
            {new Date().getFullYear()}
            <Link color="inherit" href={`${process.env.REACT_APP_TRADEMARK_LINK}`}>
                {` ${t("organizationName")}`}
            </Link>
            {"."}
        </Typography>
    );
};

export default Copyright;
