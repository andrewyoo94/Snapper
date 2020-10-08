import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    let photoId = ownProps.match.params.id;
    let comments = state.entities.comments;
    let photoComments = Object.values(comments).length ? Object.values(comments) : [];
    return ({
        photoComments: photoComments,
        photoId: photoId
    })
};

const mDTP = dispatch => {
    return ({
        fetchAllComments: (id) => dispatch(fetchAllComments(id)),
        fetchUser: (id) => dispatch(fetchUser(id))
    })
};

export default withRouter(connect(mSTP, mDTP)(CommentIndex));