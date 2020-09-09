import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECIEVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment: comment
});

const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS, 
    comments: comments
});

const removeComment = (comment) => ({
    type: DELETE_COMMENT,
    commentId: comment.id
});

const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors: errors
});

// added dispatch to fetchAllComments
export const createComment = (comment) => dispatch => {
    return (
        CommentAPIUtil.createComment(comment)
            .then((comment) => dispatch(receiveComment(comment)))
            .fail((error) => dispatch(receiveCommentErrors(error.responseJSON)))
    )
};

export const fetchAllComments = (id) => dispatch => {
    return (
        CommentAPIUtil.fetchAllComments(id)
            .then((comments) => dispatch(receiveAllComments(comments)))
            .fail((error) => dispatch(receiveCommentErrors(err.responseJSON)))
    )
};

export const deleteComment = (commentId) => dispatch => {
    return (
        CommentAPIUtil.deleteComment(commentId)
            .then((comment) => dispatch(removeComment))
            .fail((error) => dispatch(receiveCommentErrors(error.responseJSON)))
    )
};