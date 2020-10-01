import * as PhotoTagAPIUtil from '../util/phototag_api_util';

export const RECEIVE_PHOTO_TAGS = "RECEIVE_PHOTO_TAGS";
export const RECEIVE_PHOTOTAG_ERRORS = "RECEIVE_PHOTOTAG_ERRORS";

const receivePhotoTags = tags => ({
    type: RECEIVE_PHOTO_TAGS,
    tags
});

const receivePhotoTagErrors = errors => ({
    type: RECEIVE_PHOTOTAG_ERRORS,
    errors
});

export const fetchPhotoTags = (tag_id) => dispatch => {
    return (
        PhotoTagAPIUtil.fetchPhotoTags(tag_id)
            .then((tags) => dispatch(receivePhotoTags(tags)))
            .fail(error => dispatch(receivePhotoTagErrors(error.responseJSON)))
    )
}

export const createPhotoTag = (photoTag) => dispatch => {
    debugger
    return (
        PhotoTagAPIUtil.createPhotoTag(photoTag)
            .then((photoTag) => dispatch(receivePhotoTags(photoTag.tag_id)))
            .fail(error => dispatch(receiveTagErrors(error.responseJSON)))
    )
}