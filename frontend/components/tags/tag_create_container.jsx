import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import TagCreate from './tag_create';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    debugger
    return {
        current_user_id: state.entities.users[state.session.id].id,
        photo_id: ownProps.match.params.id
    };
};

const mDTP = (dispatch) => {
    return {
        createTag: (tag) => dispatch(createTag(tag))
    };
};

export default withRouter(connect(mSTP, mDTP)(TagCreate));