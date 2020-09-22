import { connect } from 'react-redux';
import { createTag } from '../../actions/tags_actions';
import TagCreate from './tag_create';

const mSTP = (state, ownProps) => {
    return {
        photo_id: ownProps.match.params.id
    };
};

const mDTP = (dispatch) => {
    return {
        createTag: (tag) => dispatch(createTag(tag))
    };
};

export default connect(mSTP, mDTP)(TagCreate);