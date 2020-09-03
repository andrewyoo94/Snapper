import { RECEIVE_PHOTO, RECEIVE_PHOTO_ERRORS, RECEIVE_ALL_PHOTOS } from "../actions/photo_actions";

const photosErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_PHOTO:
            return [];
        case RECEIVE_PHOTO_ERRORS:
            return action.errors;
        default: 
            return oldState;
    }
}

export default photosErrorsReducer;