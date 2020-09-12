import React from 'react';

class CommentCreate extends React.Component {
    constructor(props) {
        super(props); 
    
        this.state = {
            body: ``
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUpdate(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        let comment = this.state

        comment.photo_id = this.props.photo_id

        this.props.createComment(comment)
            .then( () => this.setState( {body: ``} ))
    };

    render() {
        return (
            <div className="comment-form">
                <textarea className="comment-textarea" 
                    cols="33" rows="4"
                    value={this.state.body} 
                    onChange={this.handleUpdate('body')}
                    placeholder="Add a comment here..." >
                </textarea>

                <button className="comment-form-submit"
                    onClick={this.handleSubmit}>
                    Comment
                </button>
            </div>
        )
    };

}

export default CommentCreate;