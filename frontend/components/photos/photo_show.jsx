import React from 'react';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="photo-show-container">
                <img src={`${this.props.photo.photoUrl}`} />
            </div>
        );
    }
    
}


export default PhotoShow;