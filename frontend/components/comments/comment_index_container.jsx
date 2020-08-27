import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments } from '../../actions/comment_actions';

const mSTP = state => {
    let comments = Object.values(state.entities.comments);

    return ({
        comments: comments
    })
};

const mDTP = dispatch => {
    return ({
        fetchComments: () => dispatch(fetchAllComments(id))
    })
}

export default connect(mSTP, mDTP)(CommentIndex);