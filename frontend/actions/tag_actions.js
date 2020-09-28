import * as TagAPIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG_ERRORS = "RECEIVE_TAG_ERRORS";

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
});

const receiveAllTags = tags => ({
    type: RECEIVE_ALL_TAGS,
    tags
});

const receiveTagErrors = errors => ({
    type: RECEIVE_TAG_ERRORS,
    errors
});

export const fetchTag = (id) => dispatch => {
    return (
        TagAPIUtil.fetchTag(id)
            .then((tag) => dispatch(receiveTag(tag)))
            .fail(error => dispatch(receiveTagErrors(error.responseJSON)))
    )
}

export const fetchTags = () => dispatch => {
    return (
        TagAPIUtil.fetchTags()
            .then((tags) => dispatch(receiveAllTags(tags)))
            .fail(error => dispatch(receiveTagErrors(error.responseJSON)))
    )
}

// might have to change tag to an array of tags
export const createTag = (tag) => dispatch => {
    return (
        TagAPIUtil.createTag(tag)
            .then((tag) => dispatch(receiveTag(tag)))
            .fail(error => dispatch(receiveTagErrors(error.responseJSON)))
    )
}