import React from 'react'


function CalendarItem(props) {
    const isToday = props.today;
  
    if (isToday) {
      return <div className="h-32 w-auto border-2 border-black bg-teal-400 px-1 hover:bg-teal-200">{props.date}</div>;
    } else {
      return <div className="h-32 w-auto border-2 border-black bg-gray-200 px-1 hover:bg-gray-400">{props.date}</div>
    }
      
}

export default CalendarItem
