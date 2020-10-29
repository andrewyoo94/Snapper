import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, url }) => {

    // const headerStyles = () => {


    // }

    // <div className="header-container">
    //     <header className="header">
    //         <Link className="logo" to="/explore">snapper</Link>
            


    //     </header>
    // </div>


    const sessionLinks = () => (

        <div className="header-container">
            <header className="header">
                <Link className="logo" to="/explore">snapper</Link>
                
                <nav className="login-signup">
                    <Link className="login" to="/login">Log In</Link>

                    <Link className="signup" to="/signup">Sign Up</Link>
                </nav>
            </header>
        </div>
    );


    // const sessionLinks = () => (
    //     <nav className="login-signup"> 
    //         <Link className="login" to="/login">Log In</Link>

    //         <Link className="signup" to="/signup">Sign Up</Link>
    //     </nav>
    // );
    
    const handleSubmit = () => {
        logout()
    }

    const personalGreeting = () => (
        <hgroup className="header-group">
            <Link className="header-upload" to="/upload"> 
                <img className="upload-img" src={window.images.uploadImg} />
            </Link>

            <h2 className="header-name">Hello, {currentUser.username}!
                <Link className="header-button" onClick={handleSubmit} to="/">Log Out</Link>
            </h2>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;