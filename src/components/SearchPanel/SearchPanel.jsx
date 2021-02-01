import React from "react";
import TextField from "@material-ui/core/TextField";
import "./SearchPanel.scss";

export const SearchPanel = ( { ...props } ) => (
    <div className="search-panel">
        <TextField
            label="Search"
            type="search"
            margin="normal"
            {...props}
        />
    </div>
);