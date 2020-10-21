import React from "react";
import { Link, useHistory } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <span>
            <nav className="login-signup"> 
                <Link className="login" to="/login">Log In</Link>

                <Link className="signup" to="/signup">Sign Up</Link>
            </nav>

            <div className="header-background">

            </div>
        </span>
    );
    
    const handleSubmit = () => {
        logout()
        const history = useHistory()
        history.push(`/`)
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <Link className="header-upload" to="/upload"> 
                <img className="upload-img" src={window.images.uploadImg} />
            </Link>

            <h2 className="header-name">Hello, {currentUser.username}!
                <button className="header-button" onClick={handleSubmit} >Log Out</button>
            </h2>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;