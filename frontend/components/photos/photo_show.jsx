import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.match.params.photoId)
    }

    render() { 
        let photoUrl = this.props.photo.photoUrl ? this.props.photo.photoUrl : ""; 

        return (
            <div className="photo-show-container">
                <img src={photoUrl} />
            </div>
        );
    }
    
}


export default PhotoShow;