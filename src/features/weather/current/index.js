import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrent,
  selectCurrent
} from '../weatherSlice';
import styles from './styles.module.scss';

const Current = () => {
  const current = useSelector(selectCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch]);

  if (!current) return "LOADING...";

  return (
    <div className={styles.main}>
      <div>Temp: {current.weather.main.temp}</div>
      <div>Max: {current.weather.main.temp_max}</div>
      <div>Min: {current.weather.main.temp_min}</div>
    </div>
  );
}

export default Current;