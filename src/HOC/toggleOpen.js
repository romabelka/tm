import React, { Component } from 'react'

export default function (CustomComponent) {
    return class extends Component {
        state = {
            isOpen: false
        }

        render() {
            const { toggleOpen, open, close } = this
            return <CustomComponent
                {...this.state}
                {...{toggleOpen, open, close}}
                {...this.props}
            />
        }

        toggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        close = () => {
            this.setState({
                isOpen: false
            })
        }
        open = () => {
            this.setState({
                isOpen: true
            })
        }
    }
}
