import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            imageFile: null,
            imageUrl: null
        }

        this.onFileChange = this.onFileChange.bind(this);
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
        formData.append('post[title]', this.state.title);
        if (this.state.imageFile) {
            formData.append('post[photo]', this.state.imageFile);
        }
        $.ajax({
            url: '/api/posts',
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

                <textarea className="upload-body"
                    value={this.state.body}
                    onChange={this.handleUpdate('body')}
                    placeholder="Add a description..."
                ></textarea>

                <button className="upload-submit" 
                    onClick={this.handleSubmit}>
                    Upload photo!
                </button>

                <input type="file"
                    className="upload-browse"
                    onChange={this.handleFile}
                />

                <img className="upload-image" src={this.state.photoUrl} />
            </div>
        );
    }
}

export default withRouter(PhotoUpload);