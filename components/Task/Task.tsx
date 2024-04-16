import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export const Task = ({id, title}: any) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="flex space-x-4 m-4 bg-white text-black p-5 touch-none">
            <input type="checkbox" className="checkbox h-5 w-5"></input>
            <span>{title}</span>
        </div>
    )
}