import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            body: ""
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();

        this.props.createComment(this.state)
            .then( () => this.setState( {body: ""} ))
    };

    render() {
        <div className="comment-form">
            <textarea name="comment-textarea" 
                      value={this.state.body} 
                      onChange={this.update(body)}
                      placeHolder="Add a comment here..." >
            </textarea>

            <button className="comment-form-submit"
                    onClick={this.handleSubmit.bind(this)}>
                    Comment
            </button>
        </div>
    };

}