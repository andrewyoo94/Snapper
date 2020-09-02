import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from "../actions/photo_actions";

const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState; 

    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            newState = Object.assign({}, oldState, { [action.photo.id]: action.photo} )
            return newState;
        default: 
            return oldState;
    }
}

export default photosReducer;