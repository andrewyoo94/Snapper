import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import GreetingContainer from "./greeting/greeting_container";
import HomepageContainer from "./homepage/homepage_container"
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import PhotoIndexContainer from "./photos/photo_index_container";
import PhotoShowContainer from "./photos/photo_show_container";
import PhotoUploadContainer from "./photos/photo_upload_container";

const App = () => (
    <div className="master">

        {/* <div className="header-container">
            <header className="header">
                <Link className="logo" to="/explore">snapper</Link>
                <Route path="/" component={GreetingContainer} />
            </header> 
        </div> */}

        <Route path="/" component={GreetingContainer} />

        <Route exact path="/" component={HomepageContainer} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

        <Switch>
            <Route exact path="/explore" component={PhotoIndexContainer} />
            <Route exact path="/photos/:id" component={PhotoShowContainer} />
            <ProtectedRoute exact path="/upload" component={PhotoUploadContainer} />            
        </Switch>

        <footer className="footer-master">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/andrewyoo94">
                Github
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrewyoo94/">
                LinkedIn
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/andrew-yoo">
                AngelList
            </a>

            <a target="_blank" rel="noopener noreferrer" href="https://andrewyoo94.github.io/">
                Portfolio
            </a>


            <a target="_blank" rel="noopener noreferrer" href="https://github.com/andrewyoo94/Snapper">
                Repo
            </a>
        </footer>

    </div>
);

export default App;