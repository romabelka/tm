import React, { Component, PropTypes } from 'react'

class ProjectIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <div>Sortable list of projects</div>
                {this.props.children}
            </div>
        )
    }
}

export default ProjectIndex