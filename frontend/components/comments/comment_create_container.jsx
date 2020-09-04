import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentCreate from './comment_create';

const mSTP = (state) => {
    return {
        currentUserId: state.entities.users[state.session.id].id
    };
};

const mDTP = (dispatch) => {
    return {
        createComment: (comment) => dispatch(createComment(comment))
    };
};

export default connect(mSTP, mDTP)(CommentCreate);