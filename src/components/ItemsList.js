import React, { Component, PropTypes } from 'react'
import FilterableList from './FilterableList'

class ItemsList extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        renderer: PropTypes.func.isRequired
    };

    render() {
        return <FilterableList {...this.props} />
    }
}

export default ItemsList