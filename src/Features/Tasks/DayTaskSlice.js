import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  tasks: [],
};

const dayTaskSlice = createSlice({
  name: "dayTask",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
      toast.success("Task deleted", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
    },

    updateCompletion: (state, action) => {
      const taskToUpdate = state.tasks.find((task) => task.id === action.payload);
      if (taskToUpdate) {
        taskToUpdate.isCompleted = true;
      }


      
      
      toast.success("Task completed!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 500,
      });
    },

    updateTask: (state, action) => {
      const { taskId, newTask } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id == taskId ? { ...task, tasksName: newTask } : task
      );
    },
  },
});

export const { addTask, updateTask, removeTask,updateCompletion } = dayTaskSlice.actions;
export const selectDayTasks = (state) => state.dayTask.tasks;
export default dayTaskSlice.reducer;
