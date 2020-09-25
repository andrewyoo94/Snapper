import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TagShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchTag(this.props.photoId)
    }

    render() {
        let tags = this.props.photoId.name ? this.props.photoId.name : '';
        document.getElementById("tag-name").innerHTML = tags;
        debugger
        return (
            <div className="tag-show">
                <span id="tag-name"></span>
            </div>
        );
    }
}

export default withRouter(TagShow);