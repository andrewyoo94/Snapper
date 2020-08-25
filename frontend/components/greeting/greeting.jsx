import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup"> 
            <Link className="login" to="/login">Log In</Link>

            <Link className="signup" to="/signup">Sign Up</Link>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hello, {currentUser.username}!
                <button className="header-button" onClick={logout}>Log Out</button>
            </h2>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;