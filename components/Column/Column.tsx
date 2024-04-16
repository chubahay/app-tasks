import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task } from '../Task/Task'

const Column = ({tasks}: Record<string, any>) => {
    return (
    <div className="flex flex-col">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task: Record<string, any>) => (
            <Task key={task.id} id={task.id} title={task.title} />
        ))}
        </SortableContext>
    </div>
    )
}

export default Column;