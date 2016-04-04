import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Menu from '../components/Menu'

class AppHeader extends Component {
    static propTypes = {
        notifications: PropTypes.object
    };

    render() {
        return (
            <div>
                <Menu />
                {this.getErrorMessage()}
            </div>
        )
    }

    getErrorMessage() {
        const { error } = this.props.notifications
        if (!error) return null
        return <h2 style={{color: 'red'}}>{error}</h2>
    }
}

export default connect((state) => {
    const { notifications } = state
    return { notifications }
})(AppHeader)