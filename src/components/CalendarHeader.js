import React from 'react'

function CalendarHeader() {
    return (
      <div className="grid grid-cols-7 grid-rows-1">
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Sun</div>
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Mon</div>
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Tue</div>
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Wed</div>
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Thu</div>
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Fri</div>
        <div className="h-12 w-auto border-2 border-black bg-teal-200 text-black text-lg px-2">Sat</div>
      </div>
    );
}

export default CalendarHeader
