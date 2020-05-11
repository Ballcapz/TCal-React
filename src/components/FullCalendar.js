import React, {useState} from 'react'

import DisplayCalendar from './DisplayCalendar';
import CalendarHeader from './CalendarHeader';

function FullCalendar() {

    const today = new Date();

    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth() + 1);

    const addMonth = () => {
        let current = month;
        current += 1;
        if (current > 12) {
            setMonth(1)
            setYear(year + 1)
        } else {
            setMonth(current)
        }
    };

    const subtractMonth = () => {
        let current = month;
        current -= 1;
        if (current < 1) {
            setMonth(12)
            setYear(year - 1)
        } else {
            setMonth(current)
        }
    };

    return (
        <>
            <h1 className="text-4xl text-center mb-4">{month}-{year}</h1>

            <div className="flex flex-row justify-center my-4">
                <button className="rounded max-w-xs mx-3 my-1 border border-teal-500 py-2 px-4 text-teal-500 font-bold hover:bg-teal-500 hover:text-white" onClick={subtractMonth}>Previous</button>
                <button className="rounded max-w-xs mx-3 my-1 border border-teal-500 py-2 px-4 text-teal-500 font-bold hover:bg-teal-500 hover:text-white" onClick={addMonth}>Next</button>
            </div>

            <CalendarHeader />
            <div className="grid grid-cols-7 grid-rows-5 gap-0">
            
                <DisplayCalendar year={year} month={month - 1} today={today} />
            
            </div>
        </>
    )
}

export default FullCalendar
