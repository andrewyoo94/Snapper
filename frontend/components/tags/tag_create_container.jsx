import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import { createPhotoTag } from '../../actions/phototag_actions';
import TagCreate from './tag_create';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        current_user_id: state.entities.users[state.session.id].id,
        photo_id: ownProps.match.params.id
    };
};

const mDTP = (dispatch) => {
    return {
        createTag: (tag) => dispatch(createTag(tag)),
        createPhotoTag: (phototag) => dispatch(createPhotoTag(phototag))
    };
};

export default withRouter(connect(mSTP, mDTP)(TagCreate));