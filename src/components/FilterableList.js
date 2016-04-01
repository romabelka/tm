import React, { Component, PropTypes } from 'react'
import SortableList from './SortableList'

class FilterableList extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        renderer: PropTypes.func.isRequired
    };

    render() {
        return <SortableList {...this.props} />
    }
}

export default FilterableList