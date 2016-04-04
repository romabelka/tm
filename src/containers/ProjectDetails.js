import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import EditableDate from '../components/EditableDate'
import EditableText from '../components/EditableText'
import ProjectEmployeesList from '../components/ProjectEmployeesList'
import { changeProjectField } from '../actions/projects'
import { changeEmployeeProjectField } from '../actions/employees'
class ProjectDetails extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        projects: PropTypes.object.isRequired,
        changeProjectField: PropTypes.func.isRequired
    };

    render() {
        const { id, projects, changeEmployeeProjectField } = this.props
        const project = projects.getIn(['entities', id])
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
                        <tr>
                            <td>Employees:</td>
                            <td><ProjectEmployeesList project = {project} changeField = {changeEmployeeProjectField}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    handleSave = field => value => {
        this.props.changeProjectField(this.props.id, field, value)
        console.log('saving', {[field]: value});
    }
}

export default connect(state => {
    const { projects, employees } = state
    return { projects, employees }
}, {
    changeProjectField, changeEmployeeProjectField
})(ProjectDetails)