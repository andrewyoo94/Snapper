import React from 'react';
import { Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { username: "demouser", password: "password" };
        this.props.processDemo(demoUser);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const loggedIn = this.props.sessionId ? <Redirect to="/explore" /> : null
        
        return (
            <div className="session-container">

                {loggedIn}

                <div className="form-container">
                    <form onSubmit={this.handleSubmit} className="form-box">
                        
                        {this.props.formType} {this.props.formType === "Sign up" ? "for Snapper" : "to Snapper"} 
                        {this.renderErrors()}
                        <div className="login-form">
                                <input className="auth-input" 
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                                <input className="auth-input" 
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                            <br />
                                <input className="auth-submit" type="submit" value={this.props.formType} />
                            <br />
                                <input className="demo-user" type="submit" value="Demo User" onClick={this.handleDemo}/>
                            <br/>
                                <div className="auth-footer">
                                    {this.props.formType === "Sign up" ? "Already a Snapper member? " : "Not a Snapper member? "} 
                                    <div className="auth-footer-link">{this.props.navLink}</div>
                                </div>
                            <br/>
                        </div>
                    </form>
                </div>
            </div>    
        );
    }
}
export default SessionForm;