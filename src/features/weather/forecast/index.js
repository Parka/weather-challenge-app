import React from 'react';
import styles from './styles.module.scss';
import moment from 'moment';

const Forecast = ({value, location}) => {
  return (
    <div className={styles.main}>
      <div className={styles.location}>{location.city}, {location.country}</div>
      <div className={styles.days}>{
        value.map(day => (
          <div key={day.dt+location.city+location.country}>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt=""/>
            <div className={styles.weekday}>{moment.unix(day.dt).format('ddd')}</div>
            <div>Max: {day.temp.max} °C</div>
            <div>Min: {day.temp.min} °C</div>
          </div>
        ))
      }</div>
    </div>
  );
}

export default Forecast;