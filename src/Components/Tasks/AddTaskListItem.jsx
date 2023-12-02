import { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask, selectDayTasks } from '../../Features/Tasks/DayTaskSlice';
import { AddInTaskList, selectTasks } from '../../Features/Tasks/TaskListSlice';
import {day,date} from '../DateDay';


const AddTaskListItem = ({id,taskName}) => {
    const [hoveredTask, setHoveredTask] = useState(null);
    const dispatch = useDispatch();
    const TaskList = useSelector(selectTasks);
    const dayTasks = useSelector(selectDayTasks);



    const handleMouseEnter = (id) => {
        setHoveredTask(id);
    };

    const handleMouseLeave = () => {
        setHoveredTask(null);
    };

    const onEdit = (id) => {
        console.log(`Edit task with ID: ${id}`);
    };

    const onDelete = (id) => {
        if(dayTasks.length==0){
            TaskList.shift();
        }
        dispatch(removeTask(id));
    };



    useEffect(() => {
          dispatch(AddInTaskList({ date, day, dayTasks }));
      }, [dayTasks]);



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
                onEdit(id);
            }}
        />
        <MdDelete
            className="cursor-pointer"
            onClick={() => {
                onDelete(id);
            }}
        />
    </div>
</li>
  )
}
export default AddTaskListItem;