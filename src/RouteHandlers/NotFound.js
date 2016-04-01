import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NotFound extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Page not found, try exploring:
                    <Link to = "/project">projects</Link>
                    or
                    <Link to = "/employee">employees</Link>
                </h1>
            </div>
        )
    }
}

export default NotFound