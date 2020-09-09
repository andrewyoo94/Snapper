import * as PhotoAPIUtil from "../util/photo_api_util";

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

const receiveAllPhotos = photos => {
    return ({
        type: RECEIVE_ALL_PHOTOS,
        photos: photos
    })
}

const receivePhoto = photo => {
    return ({
        type: RECEIVE_PHOTO,
        photo: photo
    })
}

const receivePhotoErrors = errors => {
    return ({
        type: RECEIVE_PHOTO_ERRORS,
        errors: errors
    })
}

export const fetchAllPhotos = () => dispatch => {
    return (
        PhotoAPIUtil.fetchAllPhotos()
            .then((photos) => dispatch(receiveAllPhotos(photos)))
    )
}

export const fetchPhoto = (id) => dispatch => {
    return (
        PhotoAPIUtil.fetchPhoto(id)
            .then((photo) => dispatch(receivePhoto(photo)))
            .fail((error) => dispatch(receivePhotoErrors(error.responseJSON)))
    )
}

export const createPhoto = (photo) => dispatch => {
    return (
        PhotoAPIUtil.createPhoto(photo)
            .then((photo) => dispatch(receivePhoto(photo)))
            .fail((error) => dispatch(receivePhotoErrors(error.responseJSON)))
    )
}
