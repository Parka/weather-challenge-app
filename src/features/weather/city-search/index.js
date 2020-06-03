import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addCity,
} from '../weatherSlice';

import styles from './styles.module.scss';

const Weather = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const submit = () => {
    dispatch(addCity(search));
    setSearch('');
  }

  return (
    <form
      className={styles.main}
      onSubmit={ e => {
        submit();
        e.preventDefault();
      }}
    >
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
      <input type="button" value='+'/>
    </form>
  );
}

export default Weather;