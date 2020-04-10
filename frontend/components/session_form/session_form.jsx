import React from 'react';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        return (
            <div className="session-container">
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
                            Please {this.props.formType} or {this.props.navLink}
                            <br/>
                        </div>
                    </form>
                </div>
            </div>    
        );
    }
}
export default SessionForm;