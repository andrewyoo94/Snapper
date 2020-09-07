import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoUpload extends React.Component {
    constructor(props) {
        super(props)

        this.onFileChange = this.onFileChange.bind(this);
    }

    handleUpdate(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    onFileChange(e) {
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
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
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
                <form className="upload-form">
                    <p className="upload-header">Upload</p>
                    <img className="upload-preview" src={this.state.photoUrl} />
                    {this.renderFileName()}
                    <input className="upload-title"
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.update("title")}
                    />
                    <textarea className="upload-description"
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.update("description")}
                    />
                    <div className="upload-bttns">
                        <input type="file" name="upload-file-input" id="upload-file-input" accept="image/*" onChange={this.handleFile}></input>
                        <label className="upload-file" htmlFor="upload-file-input">Browse</label>
                        <button className="upload-submit-bttn" disabled={this.state.disableBttn} onClick={this.handleUpload}>{this.state.disableBttn ? 'Loading' : 'Submit'}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(PhotoUpload);