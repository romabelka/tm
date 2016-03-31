import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/counter'
import Counter from '../components/Counter'

class AppContainer extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func
    };

    render() {
        const { counter, increment } = this.props
        return (
            <div>
                <Counter count={counter} increment = {increment}/>
            </div>
        )
    }
}

export default connect((state) => {
    const {counter} = state
    return {counter}
}, {
    increment
})(AppContainer)