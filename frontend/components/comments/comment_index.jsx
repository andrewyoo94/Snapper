import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoComments: []
        }
    }     

    componentDidMount() {
        this.setState({ photoComments: this.props.photoComments })
    }

    componentDidUpdate(preProps) {
        if (preProps.photoComments != this.props.photoComments) {
            this.setState({ photoComments: this.props.photoComments })
        }
    }

    render() {
        let comments = this.state.photoComments ? this.state.photoComments : []; 
        
        let commentIndexItems = comments.map(comment => { 
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
                    {commentIndexItems}
                </div>
            </div>
        );
    }
}

export default CommentIndex;