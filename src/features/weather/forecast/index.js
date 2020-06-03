import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';

const Forecast = ({value, location}) => {
  return (
    <div className={styles.main}>
      <div>{location.city},{location.country}</div>
      <div>{
        value.map(day => (
          <div key={day.dt+location.city+location.country}>
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