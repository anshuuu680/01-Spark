import { configureStore } from '@reduxjs/toolkit';
import dayTaskReducer from '../Features/Tasks/DayTaskSlice';

export const store = configureStore({
  reducer: {
    dayTask: dayTaskReducer,
  }
});

