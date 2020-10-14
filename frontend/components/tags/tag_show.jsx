import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TagsItem from './tag_show_item';

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

        return (
            <div className="tag-show">
                <h1>Tags</h1>
                {tagsItems}
            </div>
        );
    }
}

export default withRouter(TagShow);