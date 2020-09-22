import React from 'react';
import { withRouter } from 'react-router-dom';
import { TagCreateContainer } from '../tags/tag_create_container';

class PhotoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            imageFile: null,
            imageUrl: null
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
            this.setState({ imageUrl: reader.result, imageFile: file });
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[title]', this.state.title);
        formData.append('photo[description]', this.state.description);
        if (this.state.imageFile) {
            formData.append('photo[photo]', this.state.imageFile);
        }
        
        $.ajax({
            url: '/api/photos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

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

                <TagCreateContainer />

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