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
        let id = this.props.photoId
        let tags = this.props.tags[id] && this.props.tags[id].name ? this.props.tags[id].name  : '';
        
        return (
            <div className="tag-show">
                {tags}
            </div>
        );
    }
}

export default withRouter(TagShow);