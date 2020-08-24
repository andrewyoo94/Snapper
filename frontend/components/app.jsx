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

            <header> 
                <Link className="logo" to="/">snapper</Link>
                <Route exact path="/" component={GreetingContainer} />
            </header> 

<<<<<<< HEAD
            <ul className="background-slideshow">
                <li>
                    <span></span>
                    <span></span>
                    <div>
                        <h3>Find your inspiration.</h3>
                    </div>
                </li>
            </ul>
=======
            <div className="slideshow">
                <div className="inner-slideshow">
                    <div className="slide1"></div>
                    <div className="slide2"></div>
                    {/* <div className="slide3"></div> */}
                </div>
            </div>

>>>>>>> 621eb5f17734f47baf7feb5fa7176a01c51016b1

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <Route exact path="/photos" component={PhotoIndexContainer} />
        </div>

        <footer className="footer-master">
            <a href="https://github.com/andrewyoo94">
                <i className="fab fa-linkedin"></i>
                    Github
                </a>

            <a href="https://www.linkedin.com/in/andrewyoo94/">LinkedIn</a>
        </footer>
    </div>
);

export default App;