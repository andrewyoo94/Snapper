import React from "react";
import { Route, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PhotoIndexContainer from "./photos/photo_index_container";

const App = () => (
    <div className="master">
        <div className="homepage">
            <header className="header">
                <Link className="logo" to="/">snapper</Link>
                <Route exact path="/" component={GreetingContainer} />
            </header> 

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />


            <Route exact path="/explore" component={PhotoIndexContainer} />
        </div>

        <footer className="footer-master">
            <a href="https://github.com/andrewyoo94">
                <i className="fab fa-linkedin"></i>
                    Github
                </a>

            <a href="https://www.linkedin.com/in/andrewyoo94/">
                LinkedIn
            </a>

        </footer>
    </div>
);

export default App;