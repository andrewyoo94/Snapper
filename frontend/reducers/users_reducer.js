import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER:
            newState = Object.assign({}, oldState);
            newState[action.user.id] = action.user
            return newState; 
        default:
            return state;
    }
};

export default usersReducer;