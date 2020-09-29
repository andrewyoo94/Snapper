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
        let tags = this.props.tags ? this.props.tags : [];
        
        let tagsItems = tags.map(tag => {
            return (
                <TagsItem
                    key={tag.id}
                    tag={tag}
                    name={this.props.name}
                    photoId={this.props.photoId}
                />
            )
        });

        debugger
        return (
            <div className="tag-show">
                {tagsItems}
            </div>
        );
    }
}

export default withRouter(TagShow);