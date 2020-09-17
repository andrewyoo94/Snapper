import {
    RECEIVE_TAG,
    RECEIVE_ALL_TAGS,
    RECEIVE_TAG_ERRORS
} from '../actions/tag_actions';

const tagsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TAG:
            return [];
        case RECEIVE_ALL_TAGS:
            return [];
        case RECEIVE_TAG_ERRORS:
            return action.errors
        default:
            return oldState;
    }
}

export default tagsErrorsReducer;