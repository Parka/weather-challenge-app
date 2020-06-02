import React from 'react';
import Current from './current';
import styles from './styles.module.scss';

const Weather = () => {
  return (
    <div className={styles.main}>
      <Current/>
    </div>
  );
}

export default Weather;