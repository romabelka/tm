import React, { Component, PropTypes } from 'react'
import DevTools from './DevTools'
import Menu from '../../components/Menu'
import { Provider } from 'react-redux'
import store from '../../store'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Menu />
                    {this.props.children}
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root