'use client';
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export const Droppable = ({ item }: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    
        <ul ref={setNodeRef} style={style}>
          {item.map((item: any, index: number) => (
            <li
              className="px-4 py-3 font-semibold border rounded-2xl"
              key={index}
            >
              {item.caption}
            </li>
          ))}
        </ul>
      
  );
};
