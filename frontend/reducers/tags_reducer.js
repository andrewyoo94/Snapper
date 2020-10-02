import { RECEIVE_TAG } from '../actions/tag_actions';
import { RECEIVE_ALL_TAGS } from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_TAG:
            newState = Object.assign({}, oldState);
            newState[action.tag.id] = action.tag
            return newState;
        case RECEIVE_ALL_TAGS:
            return action.tags
        default:
            return oldState;
    }
}

export default tagsReducer;