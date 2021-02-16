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
            photographer: "",
            editable: false
        }
        this.titleEdit = React.createRef();
        this.descriptionEdit = React.createRef();
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchPhoto(this.props.photoId)
        this.props.fetchTags().then( (tags) => {
            this.setState({tagShow: Object.values(tags.tags)})
        })
    }

    componentDidUpdate(preProps) {
        if (preProps.photoId !== this.props.photoId) {
            this.props.fetchPhoto(this.props.photoId);
        }
        if (preProps.tags != this.props.tags) {
            this.setState({tagShow: this.props.tags})
        }
    }

    toggleEditable() {
        this.setState({ editable: !this.state.editable });
    }

    handleEdit(e) {
        e.preventDefault();

        let newTitle;
        let newDescription;

        if (this.state.editable) {
            newTitle = this.titleEdit.current.value;
            newDescription = this.descriptionEdit.current.value;
        }
        this.setState({ editable: !this.state.editable })

        // let editedPhoto = this.props.photo;
        // let editedPhoto = { id: this.props.photoId, title: newTitle, description: newDescription, photographer_id: this.props.photo.photographer_id, photoUrl: this.props.photo.photoUrl }

        let editedPhoto = { 
            photo: { id: this.props.photoId, title: newTitle, description: newDescription},
            id: this.props.photoId
        };
        // let editedPhoto = { id: this.props.photoId, title: newTitle, description: newDescription };

        // const photo = Object.assign({}, editedPhoto);

        // let editedPhoto = { title: newTitle, description: newDescription }

        // debugger

        this.props.updatePhoto(editedPhoto)
            // .then(() => this.props.history.push(`/photos/${editedPhoto.id}`))
            .then(() => this.props.fetchPhoto(this.props.photoId))
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePhoto(this.props.photoId)
            .then(() => this.props.history.push("/explore"))
    }

    render() { 
        const photographer_id = this.props.photo ? this.props.photo.photographer_id : "";
        
        let result = [];
        
        this.state.tagShow.map(tag => {
            if (this.props.photoId == tag.photo_id) {
                result.push(tag)
            }
        });
            
        let tagCreateContainer;
        let editButton;
        let submitButton;
        let deleteButton;
        if (this.props.currentUserId === photographer_id) {
            tagCreateContainer = (
                <div>
                    <TagCreateContainer />
                </div>
            )

            editButton = (
                <button className="edit-photo-button" onClick={this.toggleEditable}>Edit</button>
            )

            submitButton = (
                <button className="edit-photo-button" onClick={this.handleEdit}>Submit</button>
            )

            deleteButton = (
                <button className="delete-photo" onClick={this.handleDelete}>Delete Photo</button>
            )
        } else {
            tagCreateContainer = "";
            deleteButton = "";
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



        let titleEdit = this.state.editable ? <input className="photo-show-title-edit" type='text' ref={this.titleEdit} defaultValue={title} /> 
                                                : <h1 className="photo-show-title">{title}</h1>;
        let descriptionEdit = this.state.editable ? <input className="photo-show-description-edit" type='text' ref={this.descriptionEdit} defaultValue={description} /> 
                                                : <p className="photo-show-description">{description}</p>;



        
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

                            {this.state.editable === false ? editButton : submitButton}

                            <h1 className="photo-show-photographer">{photographer}</h1>
                            {titleEdit}
                            {descriptionEdit}


                            {/* <h1 className="photo-show-title">{title}</h1>
                            <p className="photo-show-description">{description}</p> */}
                        </div>

                        <div className="tag-show">
                            {deleteButton}

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