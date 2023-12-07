import { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, selectDayTasks } from '../../Features/Tasks/DayTaskSlice';


const AddTaskListItem = ({ id, taskName, isCompleted, elem }) => {
    const [hoveredTask, setHoveredTask] = useState(null);

    const dispatch = useDispatch();
    const dayTasks = useSelector(selectDayTasks);

    const handleMouseEnter = (id) => {
        setHoveredTask(id);
    };

    const handleMouseLeave = () => {
        setHoveredTask(null);
    };

    const onDelete = (id) => {
        dispatch(removeTask(id));
    };

    return (
        <li
            key={id}
            className="my-1 flex w-full h-fit justify-between cursor-pointer"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
        >
            {taskName}
            <div className="icons flex gap-3" style={{ visibility: hoveredTask === id ? 'visible' : 'hidden' }}>
                <MdEdit
                    className="cursor-pointer"
                    onClick={() => {
                        { !isCompleted && onEdit(id) };
                    }}
                />
                <MdDelete
                    className="cursor-pointer"
                    onClick={() => {
                        { !isCompleted && onDelete(id) };
                    }}
                />
            </div>
        </li>
    )
}
export default AddTaskListItem;