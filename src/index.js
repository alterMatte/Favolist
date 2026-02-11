import React from "react";
import reactDOM from "react-dom/client";
import App from "./app";    
import "./index.css";

const root = reactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
