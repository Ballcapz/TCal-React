import React from 'react';

function App() {
  return (
    <div className="max-w-full p-1">

      <CalendarItem date={1} />

    </div>
  );
}

function CalendarItem(props) {
  return (
  <div className="h-24 w-16 border-2 border-black bg-gray-100 px-1">{props.date}</div>
  );
}

export default App;
