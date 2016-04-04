import React, { Component, PropTypes } from 'react'
import editable from '../HOC/editable'

class EditableText extends Component {
    static propTypes = {
        editable: PropTypes.bool,
        text: PropTypes.string.isRequired,
        makeEditable: PropTypes.func.isRequired,
        blur: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props)
        this.state = {
            text: props.text
        }
    }


    render() {
        const { editable } = this.props
        return editable ? this.getEditable() : this.getRegular()
    }

    getRegular() {
        return <span onClick = {this.makeEditable}>{this.props.text}</span>
    }

    getEditable() {
        const { text } = this.state
        return <form onSubmit = {this.props.blur(text)}>
            <input type="text" value={text}  onChange = {this.handleChange} autoFocus={true}/>
        </form>
    }

    makeEditable = () => {
        const { text, makeEditable } = this.props
        this.setState({ text })
        makeEditable()
    }

    handleChange = (ev) => {
        this.setState({
            text: ev.target.value
        })
    }
}

export default editable(EditableText)