import { configureStore } from '@reduxjs/toolkit';
import planningReducer from './planningSlice';

export const store = configureStore({
  reducer: {
    planning: planningReducer,
  },
});
