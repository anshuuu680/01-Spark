import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, selectDayTasks } from '../../Features/Tasks/DayTaskSlice';
import { AddInTaskList } from '../../Features/Tasks/TaskListSlice';
import { useNavigate } from 'react-router-dom';
import AddTaskListItem from './AddTaskListItem';
import {day,date} from '../DateDay';
import { toast } from 'react-toastify';

const AddTask = () => {
    const dispatch = useDispatch();
    const dayTasks = useSelector(selectDayTasks);
    const navigate = useNavigate();
    const [task, setTask] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            const newTask = {
                id: nanoid(),
                isCompleted: false,
                taskName: task,
            };

            dispatch(addTask(newTask));
            setTask('');
        }
    };

    const AddHandler = () => {

        if(dayTasks.length){
            dispatch(AddInTaskList({ date, day, dayTasks }));
            navigate('/tasks');
        }else{
            toast.error('Add task!',{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 500 
              });

        }
    };

   

    

    return (
        <section className="addtask w-full h-full ">
            <div className="add-task-heading w-full h-20 bg-cyan-950 text-white flex justify-center items-center">
                <h1 className="text-4xl">So what's your today's plan?</h1>
            </div>
            <div className="add-task-bottom w-full h-full p-10 flex justify-center bg-slate-900">
                <div className="add-task-card w-1/3 h-fit flex flex-col items-center bg-black">
                    <form onSubmit={SubmitHandler} className="flex">
                        <input
                            className="px-2 outline-none border-none w-80 rounded-sm text-white text-base bg-gray-700"
                            type="text"
                            placeholder="Walk the dog"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button className="bg-green-900 text-white p-2 px-5">+ Add</button>
                    </form>
                    <div className="add-task-lists w-full p-2 min-h-fit text-white">
                        {dayTasks.map(({ id, taskName }) => (
                           <AddTaskListItem key={id} id={id} taskName={taskName}/>
                        ))}
                    </div>
                    <div className="add-task-card-bottom w-full flex justify-end p-2">
                        <button onClick={AddHandler} className="bg-green-900 w-fit h-fit p-2 rounded-2xl text-gray-200">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddTask;
