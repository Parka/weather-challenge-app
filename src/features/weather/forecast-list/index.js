import React from 'react';
import styles from './styles.module.scss';
import Forecast from '../forecast';

const ForecastList = ({value}) => {

  return (
    <div className={styles.main}>
    {value.map(({forecast, location, id, loaded}) => (
      loaded ?
        <Forecast key={id} value={forecast} location={location}/>:
        <div className={styles.spinner}>
          <i className="fas fa-spinner fa-pulse"/>
        </div>
    ))}
    </div>
  );
}

export default ForecastList;