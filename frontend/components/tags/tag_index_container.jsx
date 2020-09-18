import { connect } from 'react-redux';
import { fetchTags } from '../actions/tag_actions';
import { withRouter } from 'react-router-dom';
import TagIndex from './tag_index';

const mapStateToProps = (state) => {
    const tags = Object.keys(state.entities.tags).map(id => state.entities.tags[id]);
    return {
        tags
    }
};

const mapDispatchToProps = dispatch => {
    return({
        receiveAllTags: () => dispatch(fetchTags())
    })
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TagIndex));