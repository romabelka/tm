import React, { Component, PropTypes } from 'react'
import ProjectDetails from '../../containers/ProjectDetails'

class ProjectDetailsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ProjectDetails id = {this.props.params.id} />
        )
    }
}

export default ProjectDetailsPage