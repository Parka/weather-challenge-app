import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrent } = weatherSlice.actions;

export const getCurrent = () => async dispatch => {
  const response = await fetch('http://localhost:3001/v1/current');
  const data = await response.json();
  dispatch(setCurrent(data));
};

export const selectCurrent = state => state.weather.current;

export default weatherSlice.reducer;
