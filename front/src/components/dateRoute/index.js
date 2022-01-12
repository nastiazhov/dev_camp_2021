import React from 'react';
import { useParams } from 'react-router-dom';

function getTodayDate() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
}

let year, month, day;

export function DateRoute() {
  
  const params = useParams();

  function isDateCorrect(string) {
    const arr = string.split('-');
    [year, month, day] = arr;

    if (!Number.isNaN(Date.parse(`${year}-${month}-${day}`)) && Date.parse(`${year}-${month}-${day}`) < Date.now() && arr.length === 3)
      return true;
    return false;
  }

  if (isDateCorrect(params.date)) {
    return (
      <div>
        <p>{`Date of request is ${`${year}-${month}-${day}`}`}</p>
        <p>{`Today is ${getTodayDate()}`}</p>
      </div>
    );
  }
  return (<div>Page not found</div>);
}