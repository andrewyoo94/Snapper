import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this.props.fetchComments(this.props.photoId)
            .then( (photo) => this.setState({ comments: photo.comments }))
    }

    componentDidUpdate(preProps) {
        debugger
        if(preProps.comments != this.props.comments) {
            this.setState(this.props.comments)
        }
    }

    render() {
        console.log(this.state.comments);
        let comments = this.state.comments.map(comment => {
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