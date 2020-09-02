import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { createComment, fetchAllComments, deleteComment } from '../../actions/comment_actions';
import PhotoShow from './photo_show';


const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        photoId: ownProps.match.params.id,
        photo: state.entities.photos[ownProps.match.params.id],
    };
};

const mDTP = (dispatch) => {
    return {
        fetchPhoto: (id) => dispatch(fetchPhoto(id)),
        createComment: (comment) => dispatch(createComment(comment)),
        fetchAllComments: (id) => dispatch(fetchAllComments(id)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    };
};

export default connect(mSTP, mDTP)(PhotoShow);