import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  tasks: [],
};

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    AddInTaskList: (state, action) => {
      const { date, day, dayTasks } = action.payload;

      const existingTaskListIndex = state.tasks.findIndex(
        (taskList) => taskList.date === date && taskList.day === day
      );

      if (existingTaskListIndex !== -1) {
        state.tasks[existingTaskListIndex].tasksArray = dayTasks;
      } else {
        state.tasks.unshift({
          id: nanoid(),
          date: date,
          day: day,
          completedTasks: 0,
          tasksArray: dayTasks,
        });
      }
    },

    updateTaskCompletion: (state, action) => {
      const taskId = action.payload; 
      console.log("task-Added");
      state.tasks.forEach((task) => {
        if (task.tasksArray.some((dayTask) => dayTask.id === taskId)) {
          task.completedTasks += 1;
        }
      });
    },
  },
});

export const { AddInTaskList, OverWrite,updateTaskCompletion } = taskListSlice.actions;

export const selectTasks = (state) => state.taskList.tasks;

export default taskListSlice.reducer;
