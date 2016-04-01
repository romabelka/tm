import React, { Component, PropTypes } from 'react'
import EmployeeList from '../../containers/EmployeeList'

class EmployeeIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <div className="list-block">
                    <EmployeeList />
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default EmployeeIndex