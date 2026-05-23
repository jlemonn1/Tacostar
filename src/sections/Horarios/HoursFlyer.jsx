import React from 'react';
import { Clock } from 'lucide-react';
import HoursDay from './HoursDay';
import './HoursFlyer.css';

const HoursFlyer = ({ hours }) => {
  return (
    <div className="hours-flyer">
      <div className="hours-flyer__header">
        <Clock size={28} className="hours-flyer__icon" />
        <h3 className="hours-flyer__title">{hours.title}</h3>
      </div>
      <ul className="hours-flyer__list">
        {hours.days.map((day) => (
          <HoursDay
            key={day.day}
            day={day.day}
            hours={day.hours}
            closed={day.closed}
            weekend={day.weekend}
          />
        ))}
      </ul>
    </div>
  );
};

export default HoursFlyer;
