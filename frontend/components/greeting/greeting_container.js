import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mSTP = (state, ownProps) => { 
    return {
        currentUser: state.entities.users[state.session.id],
        url: ownProps.location.pathname
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);