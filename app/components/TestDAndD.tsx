'use client'
import { useState } from "react"
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"

export const TestDAndD = () => {

    const [items , setItems] = useState([
        {id: "1" , content: "test1"},
        {id: "2" , content: "test2"}
    ]);


    return (
        <div>
            <h1>Hello Test D and D</h1>
            <DragDropContext  onDragEnd={(item: any) => {
                console.log("on drag end fired")
            }}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {items.map((item , index) => (      
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
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
        </div>
    )
}