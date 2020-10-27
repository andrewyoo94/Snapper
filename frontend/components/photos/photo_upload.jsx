import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            name: '',
            imageFile: null,
            photoUrl: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, imageFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        if(this.state.name.length < 3) {
            document.getElementById('tag-error').innerHTML = "Tag must be at least 3 characters long!";
            document.getElementById('img-error').innerHTML = "";
            return null
        } else {
            document.getElementById('tag-error').innerHTML = "";
            document.getElementById('img-error').innerHTML = "";
        }
        e.preventDefault();
        const photoFormData = new FormData();

        let tag = { photo_id: null, name: this.state.name };

        photoFormData.append('photo[title]', this.state.title);
        photoFormData.append('photo[description]', this.state.description);
        if (this.state.imageFile) {
            photoFormData.append('photo[image]', this.state.imageFile);
            document.getElementById('img-error').innerHTML = "";
        } else {
            document.getElementById('img-error').innerHTML = "Please attach an image to upload!";
            return null
        }
        
        $.ajax({
            url: '/api/photos',
            method: 'POST',
            data: photoFormData,
            contentType: false,
            processData: false
        }).then( (response) => {
            tag.photo_id = response.id
            this.props.createTag(tag)
                .then( (response) => {
                    let phototag = { photo_id: response.tag.photo_id, tag_id: response.tag.id}
                    this.props.createPhotoTag(phototag)
                }), error => console.log(error)
            
            this.props.history.push(`/photos/${response.id}`)
        }, error => console.log(error) )
    };

    render() {
        return (
            <div className="upload-main">

                <div className="upload-container">

                    <div className="upload-details">
                        <input className="upload-browse"
                            type="file"
                            onChange={this.handleFile}
                        />

                        <input className="upload-title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleUpdate('title')}
                            placeholder="Add a title..."
                        />

                        <textarea className="upload-description"
                            value={this.state.description}
                            onChange={this.handleUpdate('description')}
                            placeholder="Add a description..."
                        ></textarea>

                        <span id="tag-error"></span>
                        <input className="tag-text"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleUpdate("name")}
                            placeholder="Add a tag..."
                            required
                        />

                        <button className="upload-submit"
                            onClick={this.handleSubmit}>
                            Upload photo!
                        </button>

                        <span id="img-error"></span>
                    </div>
                    
                    <img className="upload-image" src={this.state.photoUrl} />
                </div>

            </div>
        );
    }
}

export default withRouter(PhotoUpload);