'use client'

import Column  from "../components/Column/Column";
import Input from "../components/Input/Input";
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import { useState } from 'react';

const Home = () => {

  const [tasks, setTasks] = useState<Record<string, any>[]>([{
    id: '1',
    title: 'Task 1',
    completed: false
}, {
    id: '2',
    title: 'Task 2',
    completed: false
}, {
    id: '3',
    title: 'Task 3',
    completed: false
}]);

const getTaskPosition = (id: string) => tasks.findIndex((task) => task.id === id);

const addTask = (title: any) => {
  setTasks((tasks) => [...tasks, {id: String(tasks.length + 1), title, completed: false}])
}



const handleDragEnd = (event: any) => {
  const {active, over} = event;

  if(active.id === over.id) return;

  setTasks((tasks) => {
    const originalPosition = getTaskPosition(active.id);
    const newPosition = getTaskPosition(over.id);

    return arrayMove(tasks, originalPosition, newPosition);
  })
}

const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(TouchSensor),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates
  })
)

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="p-10 text-5xl">Tasks ☠️</h1>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} sensors={sensors}>
      <Input onSubmit={addTask}/>
      <div className="flex flex-col space-between w-auto p-10 border border-gray-500">
        <Column tasks={tasks}/>
      </div>
      </DndContext>
    </main>
  );
}

export default Home;