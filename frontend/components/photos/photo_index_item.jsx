import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props => {
    const photoUrl = props.photo.photoUrl;
    
    return (
        <div className="photos-index-item">
            <Link to={`/photos/${props.photo.id}`}>
                <img className="photo-img" src={photoUrl} alt=""/>
            </Link>
        </div>
    );
}

export default PhotoIndexItem;