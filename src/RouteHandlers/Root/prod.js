import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Menu from '../../components/Menu'
import store from '../../store'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Menu />
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root