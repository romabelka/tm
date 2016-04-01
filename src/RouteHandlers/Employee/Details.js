import React, { Component, PropTypes } from 'react'
import EmployeeDetails from '../../containers/EmployeeDetails'

class EmpolyeeDetailsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <EmployeeDetails id = {this.props.params.id} />
        )
    }
}

export default EmpolyeeDetailsPage