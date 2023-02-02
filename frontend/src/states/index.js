import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,

  reducers: {
    setMode: (state, action) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;
