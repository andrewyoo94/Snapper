import React from 'react';
import CommentCreate from './comment_create';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.photoId);
    }

    render() {
        let comments = this.props.comments.map(comment => {
            return (
                <CommentIndexItem
                    key={comment.id}
                    comment={comment}
                    photoId={this.props.photoId}
                    currentUsername={this.props.currentUsername}
                />
            )
        });

        return (
            <div className="comments-section">
                <div className="comment-info">
                    {comments}
                </div>
            </div>
        );
    }
}

export default CommentIndex;