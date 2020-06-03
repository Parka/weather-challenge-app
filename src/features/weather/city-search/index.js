import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addCity,
} from '../weatherSlice';

import styles from './styles.module.scss';

const Weather = ({disabled}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const submit = () => {
    dispatch(addCity(search));
    setSearch('');
  }

  return (
    <form
      onSubmit={ e => {
        submit();
        e.preventDefault();
      }}
    >
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search city"
        disabled={disabled}
      />
    </form>
  );
}

export default Weather;