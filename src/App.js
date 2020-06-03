import React from 'react';
import Weather from './features/weather/';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Weather />
    </div>
  );
}

export default App;
