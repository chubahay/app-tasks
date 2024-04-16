import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export const Task = ({id, title}: any) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="space-x-3 m-1 w-auto bg-white text-black p-4 touch-none">
            <input type="checkbox" className="checkbox h-5 w-5"></input>
            <span className="overflow-auto whitespace-normal">{title}</span>
        </div>
    )
}