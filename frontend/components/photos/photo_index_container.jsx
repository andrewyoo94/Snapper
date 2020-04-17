import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchAllPhotos } from '../../actions/photo_actions';

const mSTP = state => {
    let photos = Object.values(state.entities.photos);
    let users = state.entities.users;

    return ({
        photos: photos,
        users: users
    })
}

const mDTP = dispatch => {
    return ({
        fetchPhotos: () => dispatch(fetchAllPhotos())
    })
}

export default connect(mSTP, mDTP)(PhotoIndex);