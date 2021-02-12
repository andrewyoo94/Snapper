import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state = [], action) => {
    let newState = Object.assign({}, state)
    Object.freeze(state);
    debugger

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            debugger
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state; 
    }
};