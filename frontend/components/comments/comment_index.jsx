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
        // this.setState({ photoComments: this.props.photoComments })
        this.props.fetchAllComments(this.props.photoId)
    }

    componentDidUpdate(preProps) {
        // if (preProps.photoComments != this.props.photoComments) {
        //     this.setState({ photoComments: this.props.photoComments })
        // }

        
    }

    render() {
        // let comments = this.state.photoComments ? this.state.photoComments : []; 
    
        
        
        // let commentIndexItems = comments.map(comment => { 
        //     debugger
        //     return (
        //         <CommentIndexItem
        //             key={comment.id}
        //             comment={comment}
        //             photoId={this.props.photoId}
        //             // username={this.props.fetchUser[comment.user_id].username}
        //         />
        //     )
        // });
        
        return (    
            <div className="comments-section">
                <div className="comment-info">
                    {/* {commentIndexItems} */}
                </div>
            </div>
        );
    }
}

export default CommentIndex;