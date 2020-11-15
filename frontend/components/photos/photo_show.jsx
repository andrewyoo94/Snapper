import React from 'react';
import { Link } from "react-router-dom";
import CommentCreateContainer from '../comments/comment_create_container';
import CommentIndexContainer from '../comments/comment_index_container';
import TagShowContainer from '../tags/tag_show_container';
import TagCreateContainer from '../tags/tag_create_container';
import TagsItem from '../tags/tag_show_item';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagShow: [],
            photographer: ""
        }
    }
    
    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId)
        this.props.fetchTags().then( (tags) => {
            this.setState({tagShow: Object.values(tags.tags)})
        })
    }

    componentDidUpdate(preProps, preState) {
        if (preProps.photoId !== this.props.photoId) {
            this.props.fetchPhoto(this.props.photoId);
        }
        if (preProps.tags != this.props.tags) {
            this.setState({tagShow: this.props.tags})
        }
    }

    render() { 
        let tagCreateContainer;
        const photographer_id = this.props.photo ? this.props.photo.photographer_id : "";

        let result = [];

        this.state.tagShow.map(tag => {
            if (this.props.photoId == tag.photo_id) {
                result.push(
                    tag
                )
            }
        });

        if (this.props.currentUserId === photographer_id) {
            tagCreateContainer = (
                <div>
                    <TagCreateContainer />
                </div>
            )
        } else {
            tagCreateContainer = "";
        };

        let commentCreateContainer;
        if (this.props.currentUserId) {
            commentCreateContainer = (
                <div>
                    <CommentCreateContainer />
                </div>
            )
        } else {
            commentCreateContainer = "";
        };

        const photoUrl = this.props.photo ? this.props.photo.photoUrl : ""; 
        const photographer = this.props.photo ? this.props.photo.user.username : "";
        const title = this.props.photo ? this.props.photo.title : "";
        const description = this.props.photo ? this.props.photo.description : "";
        
        return (
            <div className="photo-show-main">

                <div>
                    <Link className="photo-show-back" to="/explore">
                        <img className="back-logo" src={window.images.backArrow} />
                        Back To explore
                    </Link>
                </div>

                <div className="photo-show-container">


                    <img className="photo-show-img" src={photoUrl} />
                </div>

                <div className="photo-show-info">
                    <div className="photo-show-info-top">
                        <div className="photo-show-info-container">
                            <h1 className="photo-show-photographer">{photographer}</h1>
                            <h1 className="photo-show-title">{title}</h1>

                            <p className="photo-show-description">{description}</p>
                        </div>

                        <div className="tag-show">
                            <div>
                                <h3 className="tag-header">Tags</h3>

                                {tagCreateContainer}
                            </div>

                            <div className="tag-list">
                                {result.map((tag) => {
                                    return (
                                        <div className="tag-item">{tag.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <CommentIndexContainer />
                    {commentCreateContainer}
                </div>
            </div>
        );
    }
}   

export default PhotoShow;