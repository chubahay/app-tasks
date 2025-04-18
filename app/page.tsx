'use client'

import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import { useState } from 'react';

import Column  from "@/components/Column/Column";
import Input from "@/components/Input/Input";
import Header from '@/components/Header/Header';

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
      <Header/>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} sensors={sensors}>
      <div className="flex flex-col flex-grow">
      <Input onSubmit={addTask}/>
      <Column tasks={tasks}/>
      </div>
      </DndContext>
    </main>
  );
}

export default Home;