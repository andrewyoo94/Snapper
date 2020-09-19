import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTag } from '../actions/tag_actions';


const mSTP = (state, ownProps) => {
    let tag = Object.values(state.entities.tags);

    return {
        tag
    };
}

const mDTP = dispatch => ({
    receiveTag: id => dispatch(fetchTag(id))
});

export default withRouter(connect(mSTP, mDTP)(TagShow));