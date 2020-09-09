import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO } from "../actions/photo_actions";
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState; 

    switch(action.type) {
        case RECEIVE_ALL_PHOTOS:
            return action.photos;
        case RECEIVE_PHOTO:
            newState = Object.assign({}, oldState, { [action.photo.id]: action.photo} )
            return newState;
        case RECEIVE_COMMENT:
            newState = Object.assign({}, oldState)
            Object.values(newState).map( photo => {
                debugger
                if(photo.id === action.comment.photo_id) {
                    debugger
                    photo.comments.push(action.comment)
                }
            })
            return newState;
        default: 
            return oldState;
    }
}

export default photosReducer;