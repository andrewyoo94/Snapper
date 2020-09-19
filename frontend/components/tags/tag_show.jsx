import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class TagShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        this.props.receiveTag(this.state.tag.photo_id)
    }

    render() {
        let tag = this.state.tag ? this.state.tag : [];

        return (
            <div className="tag-show">
                { tag }
            </div>
        );
    }
}

export default withRouter(TagShow);