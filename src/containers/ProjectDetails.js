import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import EditableDate from '../components/EditableDate'
import EditableText from '../components/EditableText'

class ProjectDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        employees: PropTypes.object.isRequired,
        projects: PropTypes.object.isRequired
    };

    render() {
        const { id, employees, projects } = this.props
        const project = projects.getIn(['entities', id])
        const projectEmployees = employees.get('entities')
            .filter(employee => employee.getIn(['projects', project.get('id')]))
        return (
            <div className="details-block">
                project {this.props.id}
                <table>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td><EditableText text = {project.get('name')} save = {this.handleSave('name')}/></td>
                        </tr>
                        <tr>
                            <td>Start Date: </td>
                            <td><EditableDate date = {project.get('startDate')} save = {this.handleSave('startDate')}/></td>
                        </tr>
                        <tr>
                            <td>Completion Date: </td>
                            <td><EditableDate date = {project.get('endDate')} save = {this.handleSave('endDate')}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    handleSave = field => state => {
        console.log('saving', {[field]: state});
    }
}

export default connect(state => {
    const { employees, projects } = state
    return { employees, projects }
})(ProjectDetails)