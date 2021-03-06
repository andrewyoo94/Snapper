import React from 'react';

class TagCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            photo_id: this.props.photo_id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();

        let tag = { photo_id: this.state.photo_id, name: this.state.name };

        this.props.createTag(tag)
            .then((response) => {
                let phototag = { photo_id: response.tag.photo_id, tag_id: response.tag.id }
                this.props.createPhotoTag(phototag)
            }), error => console.log(error)
        
        this.setState({ name: `` })
    };

    render() {
        return (
            <div className="tag-form">
                <button className="tag-button" onClick={this.handleSubmit}>Add tag</button>

                <input className="tag-text"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleUpdate("name")}
                    placeholder="Add a tag" />
            </div>
        )
    };

};

export default TagCreate;