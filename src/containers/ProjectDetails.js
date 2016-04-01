import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ProjectDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        employees: PropTypes.object.isRequired,
        projects: PropTypes.object.isRequired
    };

    render() {
        const { id, employees, projects } = this.props
        const project = projects.get(id)
        const projectEmployees = employees.filter(employee => employee.getIn(['projects', project.get('id')]))
        return (
            <div className="details-block">
                project {this.props.id}
            </div>
        )
    }
}

export default connect(state => {
    const { employees, projects } = state
    return { employees, projects }
})(ProjectDetails)