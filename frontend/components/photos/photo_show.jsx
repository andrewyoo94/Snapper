import React from 'react';
import CommentCreateContainer from '../comments/comment_create_container';
import CommentIndexContainer from '../comments/comment_index_container';
import TagShowContainer from '../tags/tag_show_container';
import TagCreateContainer from '../tags/tag_create_container';
import TagsItem from '../tags/tag_show_item';

class PhotoShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     tags = []
        // }
    }
    
    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId)
        this.props.fetchTags()
    }

    componentDidUpdate(preProps, preState) {
        if (preProps.photoId !== this.props.photoId) {
            this.props.fetchPhoto(this.props.photoId);
        }
    }

    render() { 
        let tagContainer;
        let photographer_id = this.props.photo ? this.props.photo.photographer_id : "";

        // create ternary
        let result = [];

        let tagShow = this.props.tags.map(tag => {
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

        console.log(result)
        return (
            <div className="photo-show-main">
                <div className="photo-show-container">
                    <img src={photoUrl} />
                </div>

                {/* <TagShowContainer /> */}
                <div className="tag-show">
                    {result.map((tag) => {
                        <div>{tag.name}</div>
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