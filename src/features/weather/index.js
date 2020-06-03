import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrent,
  selectCurrentWeather,
  selectCurrentForecast,
  selectCurrentLocation,
} from './weatherSlice';

import Current from './current';
import Forecast from './forecast';


import styles from './styles.module.scss';

const Weather = () => {
  const currentWeather = useSelector(selectCurrentWeather);
  const currentForecast = useSelector(selectCurrentForecast);
  const currentLocation =  useSelector(selectCurrentLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch]);

  return (
    <div className={styles.main}>
      <Current value={currentWeather}/>
      <Forecast value={currentForecast} location={currentLocation}/>
    </div>
  );
}

export default Weather;