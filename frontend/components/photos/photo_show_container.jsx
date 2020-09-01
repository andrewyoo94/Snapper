import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';


const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        photo: state.entities.photos[ownProps.match.params.id]
    };
};

const mDTP = (dispatch) => {
    return {
        fetchPhoto: (id) => dispatch(fetchPhoto(id))
    };
};

export default connect(mSTP, mDTP)(PhotoShow);