import React, { FC } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Copyright: FC = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright @"}
            <Link color="inherit" href={`${process.env.REACT_APP_TRADEMARK_LINK}`}>
                {`${process.env.REACT_APP_TRADEMARK_NAME} `}
            </Link>
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default Copyright;
