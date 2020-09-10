import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoComments: [],
            testComments: {}
        }
    }     

    componentDidMount() {
        this.setState({ photoComments: this.props.photoComments })
        
        this.props.fetchComments(this.props.photoId)
            .then((comments) => {
                debugger
                return(
                    this.setState({ testComments: comments })
                )
            }
        )
    
        debugger
        // this.props.fetchComments(this.props.photoId)
        //     .then((photo) => this.setState({ comments: photo.comments }))
    }

    componentDidUpdate(preProps) {
        if (preProps.photoComments != this.props.photoComments) {
            this.setState({ photoComments: this.props.photoComments })
        }
    }

    render() {
        let comments = this.state.photoComments ? this.state.photoComments : [];

        debugger 
        
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