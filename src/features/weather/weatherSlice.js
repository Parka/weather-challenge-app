import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    forecasts:[]
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    addCitySearch: (state, action) => {
      state.forecasts.push({
        id: state.forecasts.id,
        loaded: false,
        query: action.payload,
      })
    },
    updateCitySearch: (state, action) => {
      state.forecasts = state.forecasts.map( forecast => (
        (forecast.query === action.payload.query) ?
          {...action.payload, loaded: true} :
          forecast
      ))

    },
  },
});

export const { setCurrent, addCitySearch, updateCitySearch } = weatherSlice.actions;

export const getCurrent = () => async dispatch => {
  const data = await Promise.all([
    fetch('http://localhost:3001/v1/current').then(x=>x.json()),
    fetch('http://localhost:3001/v1/forecast').then(x=>x.json()),
  ]);

  dispatch(setCurrent({...data[0], ...data[1]}));
};

export const addCity = query => async (dispatch, getState) => {
  const {forecasts} = getState().weather;
  if (forecasts.length>4) return;

  dispatch(addCitySearch(query));
  const data = await fetch(`http://localhost:3001/v1/forecast/${query}`).then(x=>x.json());
  dispatch(updateCitySearch({...data, query}));

}

export const selectCurrentWeather = state => state.weather.current ? state.weather.current.weather.main : null;
export const selectCurrentForecast = state => state.weather.current ? state.weather.current.forecast : null;
export const selectCurrentLocation = state => state.weather.current ? state.weather.current.location : null;
export const selectForecasts =  state => state.weather.forecasts ? state.weather.forecasts : null;

export default weatherSlice.reducer;
