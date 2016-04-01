import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList'
import { Link } from 'react-router'

class ProjectList extends Component {
    static propTypes = {

    };

    render() {
        return <ItemsList items = {this.props.projects} renderer = {renderer} />

    }
}

function renderer(project) {
    return <Link to={`/project/${project.get('id')}`} activeClass="active">{project.get('name')}</Link>
}

export default connect(state => {
    const { projects } = state
    return { projects }
})(ProjectList)