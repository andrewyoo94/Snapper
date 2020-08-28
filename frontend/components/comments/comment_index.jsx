import React from 'react';
import CommentForm from './comment_form';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.state.loading) return <div className="lds-dual-ring" />;

        const { comments } = this.props;
        return (
            <div className='photo-viewer-comment-container'>
                <ul className='photo-view-comment-index'>
                    {comments.map(comment => (
                        <CommentIndexItem key={comment.id}
                            comment={comment}
                            currentUserId={this.props.currentUserId}
                            deleteComment={this.props.deleteComment}
                        />
                    ))}
                </ul>
                <CommentForm
                    createComment={this.props.createComment}
                    photoId={this.props.photoId}
                />
            </div>
        );
    }
}

export default CommentIndex;