import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { createComment, fetchAllComments, deleteComment } from '../../actions/comment_actions';
import { fetchTags } from '../../actions/tag_actions';
import PhotoShow from './photo_show';

const mSTP = (state, ownProps) => {
    console.log(state)
    return {
        // username: state.entities.photos[ownProps.match.params.id].photographer_id,
        currentUserId: state.session.id,
        photo: state.entities.photos[ownProps.match.params.id],
        photoId: ownProps.match.params.id,
        tags: Object.values(state.entities.tags)
    };
};

const mDTP = (dispatch) => {
    return {
        fetchPhoto: (id) => dispatch(fetchPhoto(id)),
        createComment: (comment) => dispatch(createComment(comment)),
        fetchAllComments: (id) => dispatch(fetchAllComments(id)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        fetchTags: () => dispatch(fetchTags())
    };
};

export default connect(mSTP, mDTP)(PhotoShow);