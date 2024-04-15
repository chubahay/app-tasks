
import { useState } from 'react';

const Tasks = () => {

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
    
    
    return (
    <div>
        {tasks.map((task: Record<string, any>) => (
            <div key={task.id} className="flex items-center p-4 border border-gray-200">
                <p>{task.title}</p>
            </div>
        ))}
    </div>
    )
}

export default Tasks;