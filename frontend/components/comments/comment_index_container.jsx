import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';


const mSTP = (state, ownProps) => {
    let photoId = ownProps.match.params.id;
    let photo = state.entities.photos[photoId];
    let comments = photo ? photo.comments : [];
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

export default withRouter(connect(mSTP, mDTP)(CommentIndex));