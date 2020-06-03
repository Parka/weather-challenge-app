import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrent,
  selectCurrentWeather,
  selectCurrentForecast,
  selectCurrentLocation,
  selectForecasts,
} from './weatherSlice';

import Current from './current';
import Forecast from './forecast';
import ForecastList from './forecast-list';
import CitySearch from './city-search';

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

  if (!currentWeather) return 'Loading... ';

  const isForecastFull = !(forecasts.length < 5);
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Current value={currentWeather}/>
          <CitySearch disabled={isForecastFull}/>
        </div>
        <Forecast value={currentForecast} location={currentLocation}/>
        <ForecastList value={forecasts}/>
      </div>
    </div>
  );
}

export default Weather;