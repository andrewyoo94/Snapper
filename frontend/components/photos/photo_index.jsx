import React from 'react';
import PhotoIndexItem from "./photo_index_item";

class PhotoIndex extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPhotos()
    }

    render() {
        let photos = this.props.photos.map(photo => {
            return (
                <PhotoIndexItem key={photo.id} photo={photo} />
            )
        });

        return (
            <div className="photos-index">
                {photos}
            </div>
        );
    }

}

export default PhotoIndex;