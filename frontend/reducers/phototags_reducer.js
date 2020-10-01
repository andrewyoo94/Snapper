import { RECEIVE_PHOTO_TAGS } from '../actions/phototag_actions';
import { RECEIVE_PHOTOTAG_ERRORS } from '../actions/phototag_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    // let newState;

    switch (action.type) {
        case RECEIVE_PHOTO_TAGS:
            return action.phototags;
        case RECEIVE_PHOTOTAG_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
};