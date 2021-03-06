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
    removeCitySearch: (state, action) => {
      state.forecasts = state.forecasts.filter( forecast => (
        forecast.query !== action.payload
      ))

    },
  },
});

export const { setCurrent, addCitySearch, updateCitySearch, removeCitySearch } = weatherSlice.actions;

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
  try{
    const data = await fetch(`http://localhost:3001/v1/forecast/${query}`)
      .then(response => {
        if(!response.ok) throw Error('Couldn\'t fetch the forecast');
        return response;
      })
      .then(x=>x.json())

    dispatch(updateCitySearch({...data, query}));
  } catch (e){
    dispatch(removeCitySearch(query));
  };

}

export const selectCurrentWeather = state => state.weather.current ? {
    temp: state.weather.current.weather.main.temp,
    icon: state.weather.current.weather.weather[0].icon,
  } : null;
export const selectCurrentForecast = state => state.weather.current ? state.weather.current.forecast : null;
export const selectCurrentLocation = state => state.weather.current ? state.weather.current.location : null;
export const selectForecasts =  state => state.weather.forecasts ? state.weather.forecasts : null;

export default weatherSlice.reducer;
