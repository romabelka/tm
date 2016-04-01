import React, { Component, PropTypes } from 'react'

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

    render() {
        const { items, renderer } = this.props
        const listItems = this.state.order
            .filter(id => items.get(id))
            .map((id) => <li key = {id}>{renderer(items.get(id))}</li>)

        return <ul>{listItems}</ul>
    }
}

export default SortableList