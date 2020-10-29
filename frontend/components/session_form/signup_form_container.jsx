import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors, session }) => {
    return {
        errors: errors.session,
        formType: 'Sign up',
        navLink: <Link to="/login">Log in here.</Link>,
        sessionId: session.id
    };
};
const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processDemo: (user) => dispatch(login(user))
    };
};
export default connect(mSTP, mDTP)(SessionForm);