import React from 'react';

import styles from './styles.module.scss';

const Current = ({value}) => {

  if (!value) return "LOADING...";

  return (
    <div className={styles.main}>
      <img src={`http://openweathermap.org/img/wn/${value.icon}@2x.png`} alt=""/>
      <div className={styles.temperature}>{value.temp} °C</div>
    </div>
  );
}

export default Current;