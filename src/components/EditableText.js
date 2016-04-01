import React, { Component, PropTypes } from 'react'
import editable from '../HOC/editable'

class EditableText extends Component {
    static propTypes = {
        editable: PropTypes.bool,
        text: PropTypes.string.isRequired,
        makeEditable: PropTypes.func.isRequired,
        blur: PropTypes.func.isRequired
    };

    render() {
        const { editable, text, makeEditable, blur } = this.props
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default editable(EditableText)