import React, { Component, PropTypes } from 'react'
import { getProjectEmployees } from '../utils'
import EditableDate from '../components/EditableDate'
import EditableText from '../components/EditableText'

class ProjectEmployeesList extends Component {
    static propTypes = {
        project: PropTypes.object.isRequired,
        changeField: PropTypes.func.isRequired
    };

    render() {
        const { project } = this.props
        const projectId = project.get('id')
        const employees = getProjectEmployees(projectId)
        const elements = employees.toArray().map(employee => {
            const projectData = employee.getIn(['projects', projectId])
            const eId = employee.get('id')
            return (
                <li key = {eId}>
                    <ul>
                        <li>name: {employee.get('name')}</li>
                        <li>role: <EditableText text = {projectData.get('role')} save = {this.handleChange('role', eId)} /></li>
                        <li>start date: <EditableDate date = {projectData.get('startDate')} save = {this.handleChange('startDate', eId)} /></li>
                        <li>end date:  <EditableDate date = {projectData.get('endDate')} save = {this.handleChange('endDate', eId)} /></li>
                    </ul>
                </li>
            )
        })
        return (
            <ul>
                {elements}
            </ul>
        )
    }

    handleChange = (field, eId) => (value) => {
        this.props.changeField({
            projectId: this.props.project.get('id'),
            eId, field, value
        })
    }
}

export default ProjectEmployeesList