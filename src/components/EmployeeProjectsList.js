import React, { Component, PropTypes } from 'react'
import ProjectDetails from '../containers/ProjectDetails'
import EditableDate from '../components/EditableDate'
import EditableText from '../components/EditableText'
import Modal from 'react-modal'
import toggleOpen from '../HOC/toggleOpen'

//todo should reuse this modal logic for lists
class ProjectEmployeesList extends Component {
    static propTypes = {
        employee: PropTypes.object.isRequired,
        projects: PropTypes.object.isRequired,
        changeField: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
        open: PropTypes.func.isRequired,
        close: PropTypes.func.isRequired
    };

    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        projectInModalId: null
    }

    render() {
        return (
            <div>
                {this.getProjectList()}
                {this.getProjectModal()}
            </div>
        )
    }

    getProjectModal() {
        const { isOpen, close} = this.props
        const { projectInModalId } = this.state
        if (!projectInModalId) return null
        return (
            <Modal isOpen = {isOpen} onRequestClose={close}>
                <ProjectDetails id = {projectInModalId} goToEntity = {this.goToEntity}/>
            </Modal>
        )
    }

    getProjectList() {
        const { employee } = this.props
        const projects = this.props.projects.get('entities')
            .filter(project => employee.getIn(['projects', project.get('id')]))

        const elements = projects.toArray().map(project => {
            const projectId = project.get('id')
            const projectData = employee.getIn(['projects', projectId])
            return (
                <li key = {projectId}>
                    <ul>
                        <li>name: <a href = "#" onClick = {this.handleNameClick(project.get('id'))}>{project.get('name')}</a></li>
                        <li>role: <EditableText text = {projectData.get('role')} save = {this.handleChange('role', projectId)} /></li>
                        <li>start date: <EditableDate date = {projectData.get('startDate')} save = {this.handleChange('startDate', projectId)} /></li>
                        <li>end date:  <EditableDate date = {projectData.get('endDate')} save = {this.handleChange('endDate', projectId)} /></li>
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
            projectInModalId: id
        })
    }

    goToEntity = (id) => {
        this.props.close()
        this.context.router.push(`/employee/${id}`)
    }


    handleChange = (field, projectId) => (value) => {
        this.props.changeField({
            eId: this.props.employee.get('id'),
            projectId, field, value
        })
    }
}

export default toggleOpen(ProjectEmployeesList)