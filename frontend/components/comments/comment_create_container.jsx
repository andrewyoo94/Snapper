import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentCreate from './comment_create';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    debugger
    return {
        photo_id: ownProps.match.params.id,
        currentUserId: state.entities.users[state.session.id].id
    };
};

const mDTP = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    };
};

export default withRouter(connect(mSTP, mDTP)(CommentCreate));