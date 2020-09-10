import { connect } from 'react-redux';
import { createComment, fetchAllComments } from '../../actions/comment_actions';
import { fetchPhoto } from '../../actions/photo_actions';
import CommentCreate from './comment_create';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return {
        photo_id: ownProps.match.params.id,
        currentUserId: state.entities.users[state.session.id].id
    };
};

const mDTP = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment)),
        fetchPhoto: (photo_id) => dispatch(fetchPhoto(photo_id))
    };
};

export default withRouter(connect(mSTP, mDTP)(CommentCreate));