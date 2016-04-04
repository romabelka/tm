import React, { Component, PropTypes } from 'react'
import EditableDate from '../components/EditableDate'
import EditableText from '../components/EditableText'

class ProjectEmployeesList extends Component {
    static propTypes = {
        employee: PropTypes.object.isRequired,
        projects: PropTypes.object.isRequired,
        changeField: PropTypes.func.isRequired
    };

    render() {
        const { employee } = this.props
        const projects = this.props.projects.get('entities')
            .filter(project => employee.getIn(['projects', project.get('id')]))

        const elements = projects.toArray().map(project => {
            const projectId = project.get('id')
            const projectData = employee.getIn(['projects', projectId])
            return (
                <li key = {projectId}>
                    <ul>
                        <li>name: {project.get('name')}</li>
                        <li>role: <EditableText text = {projectData.get('role')} save = {this.handleChange('role', projectId)} /></li>
                        <li>start date: <EditableDate date = {projectData.get('startDate')} save = {this.handleChange('startDate', projectId)} /></li>
                        <li>end date:  <EditableDate date = {projectData.get('endDate')} save = {this.handleChange('endDate', projectId)} /></li>
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

    handleChange = (field, projectId) => (value) => {
        this.props.changeField({
            eId: this.props.employee.get('id'),
            projectId, field, value
        })
    }
}

export default ProjectEmployeesList