import React from 'react'

import CalendarItem from './CalendarItem';

function DisplayCalendar(props) {
    let firstDay = (new Date(props.year, props.month)).getDay();
    let daysInMonth = 32 - new Date(props.year, props.month, 32).getDate();
  
    let days = [];
  
    let date = 1;
    let index = 0;
    for (let i = 0; i < 6; i++) {
      
      for (let j = 0; j < 7; j++) {
        
        if (i === 0 && j < firstDay) {
          days.push(<CalendarItem key={index} date={''} today={false} />)
          index++;
        }
        else if (date > daysInMonth) {
          break;
        } 
        else {
          if (date === props.today.getDate() && props.year === props.today.getFullYear() && props.month === props.today.getMonth()) {
            days.push(<CalendarItem key={index} date={date} today={true} />)
          } else {
            days.push(<CalendarItem key={index} date={date} today={false} />)
          }
          date++;
          index++;
        }
      }
    }
  
    return days;
  
}

export default DisplayCalendar
