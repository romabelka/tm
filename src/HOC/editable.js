import React, { Component as ReactComponent} from 'react'

export default (Component) => class Editable extends ReactComponent {
    static propTypes = {
        save: PropTypes.func.isRequired
    };
    state = {
        editable: false
    };
    render() {
        return <Component {...this.props} {...this.state}
            makeEditable = {this.makeEditable}
            blur = {this.blur}
        />
    }

    makeEditable = (ev) => {
        if (ev) ev.preventDefault()
        this.setState({
            editable: true
        })
    }

    blur = (state) => (ev) => {
        if (ev) ev.preventDefault()
        this.props.save(state)
        this.setState({
            editable: false
        })
    }
}