import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import CircularProgressBar from "./ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "../../Features/Tasks/TaskListSlice";
import { AddInTaskList,updateTaskCompletion } from '../../Features/Tasks/TaskListSlice';
import TaskCard from './TaskCard';
import { day, date } from '../DateDay';
import { updateCompletion, selectDayTasks } from "../../Features/Tasks/DayTaskSlice";




const Task = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [completionPercentage, setCompletionPercentage] = useState(0);
    const [created, setCreated] = useState(false);
    const TaskList = useSelector(selectTasks);
    const dayTasks = useSelector(selectDayTasks);


    useEffect(() => {
        setCreated(TaskList.length > 0 && TaskList[0]?.date === date);
    }, [TaskList, date]);


    useEffect(() => {
        if (dayTasks.length != 0) {
            const integerPercentage = Math.floor((TaskList[0]?.completedTasks / dayTasks.length) * 100);
            setCompletionPercentage(integerPercentage);
            dispatch(AddInTaskList({ date, day, dayTasks }));
        }

        console.log(TaskList[0]?.completedTasks);

    }, [dayTasks,TaskList]);


    const UpdateHandler = (taskId)=>{
        dispatch(updateCompletion(taskId));
        
        dispatch(updateTaskCompletion(taskId));

    }
    






    return (
        <section className="task bg-black text-white h-full">
            <div className="task-upper w-full h-52"></div>
            <div className="task-lower w-full h-fit bg-taskListBg flex flex-col items-center p-5">
                {created ? (
                    <div className="today-tasks w-3/4 h-80 bg-black px-4 rounded-xl border-l-2 border-orange-500">
                        <div className="today-tasks-header flex h-fit w-full justify-between items-center">
                            <div className="left-task-header flex items-center gap-3">
                                <h1 className="text-xl flex items-center">Today | <span className="text-base"> &nbsp;{date}</span> </h1>

                                <MdEdit onClick={() => navigate('/tasks/addtask')} className="cursor-pointer" />
                            </div>
                            <CircularProgressBar percentage={completionPercentage} />
                        </div>
                        <div className="today-tasks-lower pt-2 text-xl">
                            {TaskList[0]?.tasksArray?.map((obj, index) => (
                                <li className="flex w-full justify-between p-1 pr-6 my-1 cursor-pointer" key={index}>
                                    {obj.taskName}
                                    <svg
                                        onClick={() => !obj.isCompleted && UpdateHandler(obj.id)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke={`${obj.isCompleted ? 'green' : 'currentColor'}`}
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`shrink-0 text-neutral-600 ${obj.isCompleted ? 'pointer-events-none' : ''}`}
                                    >
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>


                                </li>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div onClick={() => navigate('/tasks/addtask')} className="w-1/4 flex h-80 bg-black rounded-lg px-4 cursor-pointer">
                        <div
                            className="add-card w-80 h-80 bg-black text-white flex flex-col gap-4 justify-center items-center rounded-lg shadow-md cursor-pointer bg-taskCardColor"
                        >
                            <FaPlusCircle className="text-4xl" />
                            <h1 className="text-lg text-center font-semibold text-textColor">So what's your <br /> today's plan?</h1>
                        </div>
                    </div>
                )}
                <div className="tasks-list w-full h-fit grid grid-cols-2 gap-5 p-10">
                    {TaskList.map((task) => (
                        <TaskCard key={task.id} {...task} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Task;
