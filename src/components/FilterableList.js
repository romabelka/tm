import React, { Component, PropTypes } from 'react'
import SortableList from './SortableList/index'

class FilterableList extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        renderer: PropTypes.func.isRequired
    };

    state = {
        filter: ''
    };

    render() {
        return (
            <div>
                <input type = "text" value = {this.state.filter} onChange = {this.handleChange}/>
                <SortableList renderer = {this.props.renderer} items = {this.getFilteredItems()} />
            </div>
        )
    }

    getFilteredItems() {
        const { filter } = this.state
        const { items } = this.props
        if (!filter) return items
        return items.filter(item => item.get('name').includes(filter))
    }

    handleChange = (ev) => {
        this.setState({
            filter: ev.target.value
        })
    }
}

export default FilterableList