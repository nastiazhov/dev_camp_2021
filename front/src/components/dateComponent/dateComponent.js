import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
} from '@mui/material';

export function DateComponent({
  year, month, day, today,
}) {
  return (
    <Box sx={{ width: '40%' }} className="dateContainer">
        <p>{`Date of request is ${`${year}-${month}-${day}`}`}</p>
        <p>{`Today is ${today}`}</p>
     </Box>
  );
}

DateComponent.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  today: PropTypes.string.isRequired,
};