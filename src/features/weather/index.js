import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrent,
  addCity,
  selectCurrentWeather,
  selectCurrentForecast,
  selectCurrentLocation,
  selectForecasts,
} from './weatherSlice';

import Current from './current';
import Forecast from './forecast';
import ForecastList from './forecast-list';


import styles from './styles.module.scss';

const Weather = () => {
  const currentWeather = useSelector(selectCurrentWeather);
  const currentForecast = useSelector(selectCurrentForecast);
  const currentLocation =  useSelector(selectCurrentLocation);
  const forecasts = useSelector(selectForecasts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <Current value={currentWeather}/>
      <Forecast value={currentForecast} location={currentLocation}/>
      <ForecastList value={forecasts}/>
    </div>
  );
}

export default Weather;