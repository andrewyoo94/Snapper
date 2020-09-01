import React from 'react';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPhoto()
    }

    render() {
        let photoUrl = this.props.photo ? this.props.photo.photoUrl : ""; 

        return (
            <div className="photo-show-container">
                <img src={photoUrl} />
            </div>
        );
    }
    
}


export default PhotoShow;