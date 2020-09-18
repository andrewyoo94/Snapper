import React from 'react';
import { withRouter } from 'react-router-dom';

class TagIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.receiveAllTags();
    }

    render() {
        let tags = this.state.tags ? this.state.tags : [];

        return (
            <div className="tag-index">
                { tags }
            </div>
        );
    }
}


export default withRouter(TagIndex);