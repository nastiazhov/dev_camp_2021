import React from 'react';
import { useParams } from 'react-router-dom';
import { DateComponent } from '../../components/dateComponent/dateComponent';

let year, month, day;

export function DateRoute() {
  
  const params = useParams();

  function getTodayDate() {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  }

  function isDateCorrect(string) {
    const arr = string.split('-');
    [year, month, day] = arr;

    if (!Number.isNaN(Date.parse(`${year}-${month}-${day}`)) && Date.parse(`${year}-${month}-${day}`) < Date.now() && arr.length === 3)
      return true;
    return false;
  }

  if (isDateCorrect(params.date)) {
    return (
      <DateComponent
        year={year}
        month={month}
        day={day}
        today={getTodayDate()}
      />
    );
  }
  return (<div>Page not found</div>);
}