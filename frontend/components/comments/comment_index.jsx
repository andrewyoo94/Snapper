import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }     

    componentDidMount() {
        this.props.fetchAllComments(this.props.photoId)
    }

    componentDidUpdate(preProps) {
        // debugger
        // if (preProps.photoComments != this.props.photoComments) {
        //     debugger
        //     this.props.fetchAllComments(this.props.photoId)
        // }
    }

    render() {
        let commentIndexItems = this.props.photoComments.map(comment => {
            return (
                <CommentIndexItem
                    key={comment.id}
                    comment={comment}
                    photoId={comment.photoId}
                    username={comment.author}
                />
            )
        });
        
        return (    
            <div className="comments-section">
                <div className="comment-info">
                    {commentIndexItems}
                </div>
            </div>
        );
    }
}

export default CommentIndex;