import React from 'react';
import CommentCreateContainer from '../comments/comment_create_container';
import CommentIndexContainer from '../comments/comment_index_container';


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId);
    }

    componentDidUpdate(preProps, preState) {
        if (preProps.photoId !== this.props.photoId) {
            this.props.fetchPhoto(this.props.photoId);
        }
    }

    render() { 
        let photoUrl = this.props.photo ? this.props.photo.photoUrl : ""; 

        return (
            <div className="photo-show-main">
                <div className="photo-show-container">
                    <img src={photoUrl} />
                </div>

                <CommentIndexContainer />
                <CommentCreateContainer />
            </div>
        );
    }
    
}

export default PhotoShow;