import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, url }) => {

    // <div className="header-container">
    //     <header className="header">
    //         <Link className="logo" to="/explore">snapper</Link>
            
    //     </header>
    // </div>

    // const sessionLinks = () => (
    //     <nav className="login-signup"> 
    //         <Link className="login" to="/login">Log In</Link>

    //         <Link className="signup" to="/signup">Sign Up</Link>
    //     </nav>
    // );

    if (url.includes("photos")) {
        url = "/photos"
    }

    const sessionLinks = () => (
            <header className={url}>
                <Link className="logo" to="/explore">snapper</Link>
                
                <nav className="login-signup">
                    <Link className="login" to="/login">Log In</Link>

                    <Link className="signup" to="/signup">Sign Up</Link>
                </nav>
            </header>
    );
    
    const handleSubmit = () => {
        logout()
    }

    const personalGreeting = () => (

        <header className={url}>
            <Link className="logo" to="/explore">snapper</Link>
            
            <hgroup className="header-group">
                <h2 className="header-name">Hello, {currentUser.username}!</h2>

                <Link className="header-upload" to="/upload">
                    <img className="upload-img" src={window.images.uploadImg} />
                </Link>

                <Link className="header-button" onClick={handleSubmit} to="/">Log Out</Link>
            </hgroup>

        </header>
    );


    // const personalGreeting = () => (
    //     <hgroup className="header-group">
    //         <Link className="header-upload" to="/upload"> 
    //             <img className="upload-img" src={window.images.uploadImg} />
    //         </Link>

    //         <h2 className="header-name">Hello, {currentUser.username}!
    //             <Link className="header-button" onClick={handleSubmit} to="/">Log Out</Link>
    //         </h2>
    //     </hgroup>
    // );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;