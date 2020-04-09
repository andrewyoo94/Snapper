import React from "react";
import { Route, Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
    <div>
        <div className="homepage">
            <header> 
                <Link className="logo" to="/">snapper</Link>
                <Route exact path="/" component={GreetingContainer} />
            </header>
        </div>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;