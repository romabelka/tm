import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList'
import { Link } from 'react-router'
import { addNewProject } from '../actions/projects'

class ProjectList extends Component {
    static propTypes = {
        addNewProject: PropTypes.func.isRequired,
        projects: PropTypes.object.isRequired
    };

    render() {
        return <ItemsList items = {this.props.projects.get('entities')} renderer = {renderer} />

    }
}

function renderer(project) {
    return <Link to={`/project/${project.get('id')}`}>{project.get('name')}</Link>
}

export default connect(state => {
    const { projects } = state
    return { projects }
}, {
    addNewProject
})(ProjectList)