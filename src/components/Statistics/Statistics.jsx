import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, onTotal, onPositivePercentage }) => {
  return (
    <ul>
      <li className={css.item}>
        <p className={css.txt}>Good: {good}</p>
      </li>
      <li className={css.item}>
        <p className={css.txt}>Neutral: {neutral}</p>
      </li>
      <li className={css.item}>
        <p className={css.txt}>Bad: {bad}</p>
      </li>
      <li className={css.item}>
        <p className={css.txt}>Total: {onTotal}</p>
      </li>
      <li className={css.item}>
        <p className={css.txt}>Positive feedback: {onPositivePercentage}%</p>
      </li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
};
