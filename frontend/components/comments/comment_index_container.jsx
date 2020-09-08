import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments } from '../../actions/comment_actions';

const mSTP = state => {
    let comments = Object.values(state.entities.comments);
    let users = Object.values(state.entities.users);

    return ({
        comments: comments,
        currentUsername: users[0].username
    })
};

const mDTP = dispatch => {
    return ({
        fetchComments: (id) => dispatch(fetchAllComments(id))
    })
}

export default connect(mSTP, mDTP)(CommentIndex);