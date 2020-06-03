import React from 'react';

import styles from './styles.module.scss';

const Current = ({value}) => {

  if (!value) return "LOADING...";

  return (
    <div className={styles.main}>
      <div>Temp: {value.temp}</div>
      <div>Max: {value.temp_max}</div>
      <div>Min: {value.temp_min}</div>
    </div>
  );
}

export default Current;