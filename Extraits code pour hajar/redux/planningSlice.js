// src/redux/planningSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plannings: [],
};

const planningSlice = createSlice({
  name: 'planning',
  initialState,
  reducers: {
    addPlanning: (state, action) => {
      state.plannings.push(action.payload);
    },
    removePlanning: (state, action) => {
      state.plannings = state.plannings.filter(
        (planning) => planning.id !== action.payload
      );
    },
    editPlanning: (state, action) => {
      const index = state.plannings.findIndex(
        (planning) => planning.id === action.payload.id
      );
      if (index !== -1) {
        state.plannings[index] = action.payload;
      }
    },
  },
});

export const { addPlanning, removePlanning, editPlanning } = planningSlice.actions;
export default planningSlice.reducer;
