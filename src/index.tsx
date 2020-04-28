import React from "react";
import ReactDOM from "react-dom";
import "assets/css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { checkAuth } from "session/auth";

// import i18n (needs to be bundled)
import "./i18n";

/**
 * If the page is refreshed or the app closed and reopened, that status will be lost.
 * To get around that, call checkAuth when the app is first loaded.
 * This will also check the user status i.e admin or not.
 */
checkAuth();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
