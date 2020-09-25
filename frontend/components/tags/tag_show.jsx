import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TagShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        debugger
        this.props.fetchTag(this.props.photoId)
    }

    render() {
        let tags = this.state.tag ? this.state.tag : [];

        return (
            <div className="tag-show">
                { tags }
            </div>
        );
    }
}

export default withRouter(TagShow);