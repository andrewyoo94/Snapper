import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTag } from '../../actions/tag_actions';
import TagShow from './tag_show';


const mSTP = (state, ownProps) => {
    debugger
    return {
        photoId: ownProps.match.params.id,
        // tags: state.entities.tags,
        tags: Object.values(state.entities.tags)
    };
}

const mDTP = dispatch => ({
    fetchTag: id => dispatch(fetchTag(id))
});

export default withRouter(connect(mSTP, mDTP)(TagShow));