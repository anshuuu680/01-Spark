import React, { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';

import AddTaskListItem from './AddTaskListItem';
import { addTask, selectDayTasks } from '../../Features/Tasks/DayTaskSlice';
import { day, date } from '../DateDay';

const AddTask = () => {
    const inputRef = useRef(null);
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

        axios.post('/api/savetask', { dayTasks, date, day })
            .then(response => {
                console.log('Response from backend:', response.data);
            })
            .catch(error => {
                console.error('Error sending data to backend:', error);
            });



        if (dayTasks.length) {
            navigate('/tasks');
        } else {
            toast.error('Add task!', {
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
                    <form onSubmit={SubmitHandler} method='post' className="flex">
                        <input ref={inputRef}
                            className="px-2 outline-none border-none w-80 rounded-sm text-white text-base bg-gray-700"
                            type="text"
                            placeholder="Walk the dog"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button className="bg-green-900 text-white p-2 px-5">+ Add</button>
                    </form>
                    <div className="add-task-lists w-full p-2 min-h-fit text-white">
                        {dayTasks.map((obj) => (
                            <AddTaskListItem key={obj.id} {...obj} elem={inputRef.current} />
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
