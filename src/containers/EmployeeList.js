import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ItemsList from '../components/ItemsList'
import { Link } from 'react-router'

class EmployeeList extends Component {
    static propTypes = {

    };

    render() {
        return <ItemsList items = {this.props.employees.get('entities')} renderer = {renderer} />

    }
}

function renderer(employee) {
    return <Link to={`/employee/${employee.get('id')}`}>{employee.get('name')}</Link>
}

export default connect(state => {
    const { employees } = state
    return { employees }
})(EmployeeList)