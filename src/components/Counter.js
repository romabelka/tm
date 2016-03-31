import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h1 onClick = {increment}>{count}</h1>
            </div>
        )
    }
}

export default Counter