import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import { createTag } from '../../actions/tag_actions';
import { createPhotoTag } from '../../actions/phototag_actions';
import PhotoUpload from './photo_upload';

const mSTP = (state) => {
    return {
        currentUserId: state.session.id,
        errors: state.errors
    };
};

const mDTP = (dispatch) => {
    return {
        createPhoto: (photo) => dispatch(createPhoto(photo)),
        createTag: (tag) => dispatch(createTag(tag)),
        createPhotoTag: (photoTag) => dispatch(createPhotoTag(photoTag))
    }
};  

export default connect(mSTP, mDTP)(PhotoUpload);