import { configureStore } from '@reduxjs/toolkit';
import dayTaskReducer from '../Features/Tasks/DayTaskSlice';
import taskListReducer from '../Features/Tasks/TaskListSlice';


export const store = configureStore({
  reducer: {
    dayTask: dayTaskReducer,
    taskList: taskListReducer
  }
});

