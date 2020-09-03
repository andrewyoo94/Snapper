import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

const commentsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return [];
        case RECEIVE_ALL_COMMENTS:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
}

export default commentsErrorsReducer;