import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

// added Object.values(photo.comments)
const mSTP = (state, ownProps) => {
    let photoId = ownProps.match.params.id;
    let photo = state.entities.photos[photoId];
    let comments = state.entities.comments;
    let photoComments = Object.values(comments).length ? Object.values(comments) : [];

    let users = Object.values(state.entities.users);
    let username = users[0] ? users[0].username : "";

    debugger

    return ({
        photoComments: photoComments,

        // might need ternary when users is undefined cus not logged in
        currentUsername: username,
        photoId: photoId,

        users: users
    })
};

const mDTP = dispatch => {
    return ({
        fetchAllComments: (id) => dispatch(fetchAllComments(id)),
        fetchUser: (id) => dispatch(fetchUser(id))
    })
};

export default withRouter(connect(mSTP, mDTP)(CommentIndex));