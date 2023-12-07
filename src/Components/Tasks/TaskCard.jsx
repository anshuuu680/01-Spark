import CircularProgressBar from "./ProgressBar"


const TaskCard = ({ id, date, day, tasks }, index) => {


    return (
        <div key={index} className="task-card w-74 h-80 text-white rounded-lg shadow-md  bg-taskCardColor overflow-hidden">
            <div className="task-card-header w-full h-16 flex justify-between px-4">
                <div className="today-tasks-header flex h-fit w-full justify-between items-center">

                    <h1 className="text-xl flex items-center">{day} |&nbsp; <span className="text-base">{date}</span>  </h1>
                    <CircularProgressBar percentage={50} />
                </div>
            </div>
            <div className="task-card-lower w-full h-full p-4 text-xl text-white">
                {tasks.map((obj, index) => (
                    <li className="flex w-full justify-between p-1 pr-6 my-1 cursor-pointer" key={index}>
                        {obj.taskName}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke='currentColor' strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-neutral-600">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </li>
                ))}
            </div>
        </div>
    )
}
export default TaskCard;