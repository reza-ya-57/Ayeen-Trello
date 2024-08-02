'use client';
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';

function DnDWithKit() {
  const todoItems = [
    {
      id: 1,
      caption: 'got to work',
    },
    {
      id: 2,
      caption: 'return to home',
    },
    {
      id: 3,
      caption: 'fuck your self',
    },
  ];

  const [inProgressItems, setInProgressItems] = useState([
    { id: 4, caption: 'test' },
  ]);

  return (
    <div className="container">
      <DndContext>
        <main className="flex">
          {/* this is my todo list */}
          <div className="m-10">
            <h2 className="text-lg font-semibold">todo list</h2>
            <div className="border rounded-lg p-4 ">
              <ul className="space-y-6">
                {todoItems.map((item, index) => (
                  <Draggable key={index}>{item.caption}</Draggable>
                ))}
              </ul>
            </div>
          </div>

          {/* this is the in progress list */}
          <div className="m-10">
            <h2 className="text-lg font-semibold">In progress list</h2>
            <div className="border rounded-lg p-4 ">
              <Droppable item={inProgressItems} />
            </div>
          </div>
        </main>

        
      </DndContext>
    </div>
  );
}

export default DnDWithKit;
