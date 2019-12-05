import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderStyle: 'rounded',
    color: 'black',
    background: 'white',
    border: isDragging ? '1.5px dotted #3f51b5' : '',
    ...draggableStyle,
})

const getListStyle = isDraggingOver => ({
    background: 'white',
    padding: grid,
    width: 250,
})

function DraggableList(props) {
    const [state, setState] = React.useState({
        items: props.elements,
    })

    const onDragEnd = result => {
        if (!result.destination) {
            return
        }

        const items = reorder(state.items, result.source.index, result.destination.index)
        setState({ items })
        props.changePosition(items, props.index)
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                            {state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            className="card-1"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                        >
                                            {item.content}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default DraggableList
