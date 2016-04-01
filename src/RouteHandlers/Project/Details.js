import React, { Component, PropTypes } from 'react'

class ProjectDetails extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                Project details page for {this.props.params.id}
            </div>
        )
    }
}

export default ProjectDetails