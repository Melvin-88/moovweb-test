import React from "react";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "../Dashboard/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

export const App = () => {
    return (
        <>
            <div className="app">
                <Dashboard/>
            </div>
            <ToastContainer className="toast-container" />
        </>
    );
};
