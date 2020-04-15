import React from "react";
import { Route, Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div className="master">
        <div className="homepage">
            <header> 
                <Link className="logo" to="/">snapper</Link>
                <Route exact path="/" component={GreetingContainer} />
            </header> 

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <footer className="footer-master">
                <a href="https://github.com/andrewyoo94">
                    <i className="fab fa-linkedin"></i>
                    Github  
                </a>

                <a href="https://www.linkedin.com/in/andrewyoo94/">LinkedIn</a>
            </footer>
        </div>
    </div>
);

export default App;