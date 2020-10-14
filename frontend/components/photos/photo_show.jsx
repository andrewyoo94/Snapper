import React from 'react';
import CommentCreateContainer from '../comments/comment_create_container';
import CommentIndexContainer from '../comments/comment_index_container';
import TagShowContainer from '../tags/tag_show_container';
import TagCreateContainer from '../tags/tag_create_container';
import TagsItem from '../tags/tag_show_item';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagShow: []
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
        let tagContainer;
        let photographer_id = this.props.photo ? this.props.photo.photographer_id : "";

        // create ternary
        let result = [];

        this.state.tagShow.map(tag => {
            if (this.props.photoId == tag.photo_id) {
                result.push(
                    tag
                )
            }
        });

        if (this.props.currentUserId === photographer_id) {
            tagContainer = (
                <div>
                    <TagCreateContainer />
                </div>
            )
        } else {
            tagContainer = "";
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

        let photoUrl = this.props.photo ? this.props.photo.photoUrl : ""; 
        
        return (
            <div className="photo-show-main">
                <div className="photo-show-container">
                    <img src={photoUrl} />
                </div>

                <div></div>

                <div className="tag-show">
                    <h3>Tags</h3>
                    {result.map((tag) => {
                        return (
                            <div>{tag.name}</div>
                        )
                    })}
                </div>

                {tagContainer}
                <CommentIndexContainer />
                {commentCreateContainer}
            </div>
        );
    }
}   

export default PhotoShow;