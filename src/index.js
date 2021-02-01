import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { App } from "./modules/app/App";

const theme = createMuiTheme( {
    palette: {
        primary: { main: "#2861a5" },
        secondary: { main: "#707178" }
    }
} );

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById( "root" )
);
