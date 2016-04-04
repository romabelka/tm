import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import AppHeader from '../../containers/AppHeader'
import store from '../../store'

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <AppHeader />
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root