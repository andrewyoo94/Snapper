import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from "./store/store";

// TEST 
import { login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    // TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});