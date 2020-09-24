import React from 'react';
import { withRouter } from 'react-router-dom';
// import TagCreateContainer from '../tags/tag_create_container';

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
        e.preventDefault();
        const photoFormData = new FormData();

        let tag = { photo_id: null, name: this.state.name };

        photoFormData.append('photo[title]', this.state.title);
        photoFormData.append('photo[description]', this.state.description);
        if (this.state.imageFile) {
            photoFormData.append('photo[image]', this.state.imageFile);
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
            this.props.history.push(`/photos/${response.id}`)
        }, error => console.log(error) )
    };

    render() {
        return (
            <div className="upload-main">

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

                <input className="upload-browse"
                    type="file"
                    onChange={this.handleFile}
                />

                <img className="upload-image" src={this.state.photoUrl} />
            </div>
        );
    }
}

export default withRouter(PhotoUpload);