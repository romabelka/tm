import React, { Component, PropTypes } from 'react'
import editable from '../HOC/editable'

class EditableDate extends Component {
    static propTypes = {
        editable: PropTypes.bool,
        date: PropTypes.object.isRequired,
        makeEditable: PropTypes.func.isRequired,
        blur: PropTypes.func.isRequired
    };

    render() {
        const { editable, date, makeEditable, blur } = this.props
        return (
            <div>

            </div>
        )
    }
}

export default editable(EditableDate)