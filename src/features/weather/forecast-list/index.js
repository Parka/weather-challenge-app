import React from 'react';
import styles from './styles.module.scss';
import Forecast from '../forecast';

const ForecastList = ({value}) => {

  return (
    <div className={styles.main}>
    {value.filter(x=>x.loaded).map(({forecast, location, id}) => (
      <Forecast key={id} value={forecast} location={location}/>
    ))}
    </div>
  );
}

export default ForecastList;