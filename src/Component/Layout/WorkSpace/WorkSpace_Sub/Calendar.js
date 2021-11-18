import * as React from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

const Calendar = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = React.useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div className="calendar">
      <div className="container">
        <CalendarComponent className="calendar__display"/>
        <h1 className="calendar__timeDisplay">{ctime}</h1>
      </div>
    </div>
  );
};

export default Calendar;
