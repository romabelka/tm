import React, { Component, PropTypes } from 'react'
import ProjectList from '../../containers/ProjectList'

class ProjectIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <div className="list-block">
                    <ProjectList />
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default ProjectIndex