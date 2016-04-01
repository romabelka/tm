import React, { Component, PropTypes } from 'react'

class EmpolyeeDetails extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                Employee details page for {this.props.params.id}
            </div>
        )
    }
}

export default EmpolyeeDetails