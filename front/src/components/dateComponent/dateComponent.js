import React from 'react';
import PropTypes from 'prop-types';

export function DateComponent({
  year, month, day, today,
}) {
  return (
    <div>
        <p>{`Date of request is ${`${year}-${month}-${day}`}`}</p>
        <p>{`Today is ${today}`}</p>
      </div>
  );
}

DateComponent.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  today: PropTypes.string.isRequired,
};