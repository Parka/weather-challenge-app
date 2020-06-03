import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';

const Forecast = ({value, location}) => {

  if (!value) return "LOADING...";
  console.log(location)
  return (
    <div className={styles.main}>
      <div>{location.city},{location.country}</div>
      <div>{
        value.map(day => (
          <div>
            <div>Day: {moment.unix(day.dt).format('ddd')}</div>
            <div>Max: {day.temp.max}</div>
            <div>Min: {day.temp.min}</div>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt=""/>
          </div>
        ))
      }</div>
    </div>
  );
}

export default Forecast;