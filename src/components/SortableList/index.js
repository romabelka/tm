import React, { Component, PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SortableItem from './SortableItem'

class SortableList extends Component {
    static propTypes = {
        items: PropTypes.object.isRequired,
        renderer: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props)
        this.state = {
            order: props.items.toArray().map(item => item.get('id'))
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.items != nextProps.items) this.setState({
            order: nextProps.items.toArray().map(item => item.get('id'))
        })
    }

    render() {
        return <ul>{this.getListItems()}</ul>
    }

    getListItems() {
        const { items, renderer } = this.props
        return this.state.order
            .filter(id => items.get(id))
            .map((id, index) =>
                <SortableItem id = {id} key={id} reorder = {this.reorder} getIndex = {this.getIndex}>
                    {renderer(items.get(id))}
                </SortableItem>
            )
    }

    getIndex = (id) => this.state.order.indexOf(id)

    reorder = (id, newIndex) => {
        const order = this.state.order.filter(orderedId => orderedId != id)
        order.splice(newIndex, 0, id)
        this.setState({ order })
    }
}

export default DragDropContext(HTML5Backend)(SortableList)