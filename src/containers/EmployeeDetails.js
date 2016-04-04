import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class EmployeeDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        employees: PropTypes.object.isRequired,
        projects: PropTypes.object.isRequired
    };

    render() {
        const { id, employees, projects } = this.props
        const employee = employees.getIn(['entities', id])
        const employeeProjects = projects.get('entities')
            .filter(project => employee.getIn(['projects', project.get('id')]))
        return (
            <div className="details-block">
                employee {this.props.id}
            </div>
        )
    }
}

export default connect(state => {
    const { employees, projects } = state
    return { employees, projects }
})(EmployeeDetails)