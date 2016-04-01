import React, { Component, PropTypes } from 'react'

class EmployeeIndex extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <div>Sortable list of employees</div>
                {this.props.children}
            </div>
        )
    }
}

export default EmployeeIndex