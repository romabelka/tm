import React, { Component, PropTypes } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom'

export default class SortableItem extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        getIndex: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        reorder: PropTypes.func.isRequired,
        children: PropTypes.node
    };

    render() {
        const { isDragging, connectDragSource, connectDropTarget } = this.props
        const opacity = isDragging ? 0 : 1
        return connectDragSource(connectDropTarget(
            <li style = {{ opacity }}>
                {this.props.children}
            </li>
        ))
    }
}
const itemSource = {
    beginDrag(props) {
        return {
            id: props.id,
            getIndex: props.getIndex
        }
    }
}

const itemTarget = {
    hover(props, monitor, component) {
        const dragItem = monitor.getItem()
        const dragIndex = dragItem.getIndex(dragItem.id);
        const hoverIndex = props.getIndex(props.id);

        if (dragIndex === hoverIndex) return

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

        props.reorder(monitor.getItem().id, hoverIndex)
    }
}

export default DropTarget('item', itemTarget,  connect => ({
    connectDropTarget: connect.dropTarget()
}))(
DragSource('item', itemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(SortableItem)
)
