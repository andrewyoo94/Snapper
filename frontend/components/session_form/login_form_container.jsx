import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors, session }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to='/signup'>Sign up here.</Link>,
        sessionId: session.id
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)), 
        processDemo: (user) => dispatch(login(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm);