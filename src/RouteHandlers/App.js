import React, { Component, PropTypes } from 'react'
import AppContainer from '../containers/AppContainer'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <AppContainer />
            </div>
        )
    }
}

export default App