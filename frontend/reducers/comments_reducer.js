import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_COMMENTS } from '../actions/comment_actions';
import { REMOVE_COMMENT } from '../actions/comment_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_COMMENT:
            newState = Object.assign({}, oldState, action.comment );
            return newState;
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case REMOVE_COMMENT:
            newState = Object.assign({}, oldState);
            delete newState[action.comment];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};