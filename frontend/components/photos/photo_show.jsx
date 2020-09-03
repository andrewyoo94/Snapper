import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';


class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhoto(this.props.photo.id);
    }

    componentDidUpdate(preProps, preState) {
        if (preProps.photo.id !== this.props.photo.id) {
            this.props.fetchPhoto(this.props.photo.id);
        }
    }

    render() { 
        let photoUrl = this.props.photo ? this.props.photo.photoUrl : ""; 

        return (
            <div className="photo-show-main">
                <div className="photo-show-container">
                    <img src={photoUrl} />
                </div>

                <CommentFormContainer />
            </div>
        );
    }
    
}

export default PhotoShow;