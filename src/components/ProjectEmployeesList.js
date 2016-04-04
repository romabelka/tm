import React, { Component, PropTypes } from 'react'
import { getProjectEmployees } from '../utils'
import EmployeeDetails from '../containers/EmployeeDetails'
import EditableDate from '../components/EditableDate'
import EditableText from '../components/EditableText'
import Modal from 'react-modal'
import toggleOpen from '../HOC/toggleOpen'

//todo should reuse this modal logic for lists
class ProjectEmployeesList extends Component {
    static propTypes = {
        project: PropTypes.object.isRequired,
        changeField: PropTypes.func.isRequired,
        goToEntity: PropTypes.func,
        isOpen: PropTypes.bool.isRequired,
        open: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    };

    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        employeeInModalId: null
    }


    render() {
        return (
            <div>
                {this.getEmployeesList()}
                {this.getEmployeeModal()}
            </div>
        )
    }

    getEmployeeModal() {
        const { isOpen, close} = this.props
        const { employeeInModalId } = this.state
        if (!employeeInModalId) return null
        return (
            <Modal isOpen = {isOpen} onRequestClose={close}>
                <EmployeeDetails id = {employeeInModalId} goToEntity = {this.goToEntity} />
            </Modal>
        )
    }

    getEmployeesList() {
        const { project } = this.props
        const projectId = project.get('id')
        const employees = getProjectEmployees(projectId)
        const elements = employees.toArray().map(employee => {
            const projectData = employee.getIn(['projects', projectId])
            const eId = employee.get('id')
            return (
                <li key = {eId}>
                    <ul>
                        <li>name: <a href = "#" onClick = {this.handleNameClick(employee.get('id'))}>{employee.get('name')}</a></li>
                        <li>role: <EditableText text = {projectData.get('role')} save = {this.handleChange('role', eId)} /></li>
                        <li>start date: <EditableDate date = {projectData.get('startDate')} save = {this.handleChange('startDate', eId)} /></li>
                        <li>end date:  <EditableDate date = {projectData.get('endDate')} save = {this.handleChange('endDate', eId)} /></li>
                    </ul>
                </li>
            )
        })

        return <ul>{elements}</ul>
    }

    handleNameClick = id => ev => {
        ev.preventDefault()
        const { open, goToEntity } = this.props
        if (goToEntity) return goToEntity(id)

        open()
        this.setState({
            employeeInModalId: id
        })
    }

    goToEntity = (id) => {
        this.props.close()
        this.context.router.push(`/project/${id}`)
    }


    handleChange = (field, eId) => (value) => {
        this.props.changeField({
            projectId: this.props.project.get('id'),
            eId, field, value
        })
    }
}

export default toggleOpen(ProjectEmployeesList)