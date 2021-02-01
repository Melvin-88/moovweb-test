import React from "react";
import classNames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Spinner = ( { className } ) => (
    <CircularProgress className={classNames( className )} />
);