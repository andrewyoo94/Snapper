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

            </div>
        );
    }
}

export default withRouter(PhotoUpload);