import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoUpload from './photo_upload';

const mSTP = (state) => {
    return {
        currentUserId: state.session.id,
        errors: state.errors
    };
};

const mDTP = (dispatch) => {
    return {
        createPhoto: (photo) => dispatch(createPhoto(photo))
    }
};  

export default connect(mSTP, mDTP)(PhotoUpload);