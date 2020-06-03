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
  const data = await Promise.all([
    fetch('http://localhost:3001/v1/current').then(x=>x.json()),
    fetch('http://localhost:3001/v1/forecast').then(x=>x.json()),
  ]);

  dispatch(setCurrent({...data[0], ...data[1]}));
};

export const selectCurrentWeather = state => state.weather.current ? state.weather.current.weather.main : null;
export const selectCurrentForecast = state => state.weather.current ? state.weather.current.forecast : null;
export const selectCurrentLocation = state => state.weather.current ? state.weather.current.location : null;

export default weatherSlice.reducer;
