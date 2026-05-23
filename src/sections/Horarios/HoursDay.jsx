import React from 'react';
import Sticker from '../../components/ui/Sticker/Sticker';
import './HoursDay.css';

const HoursDay = ({ day, hours: dayHours, closed = false, weekend = false }) => {
  return (
    <li className={`hours-day ${closed ? 'hours-day--closed' : ''} ${weekend ? 'hours-day--weekend' : ''}`}>
      <div className="hours-day__left">
        <span className="hours-day__name">{day}</span>
        {closed && (
          <span className="hours-day__badge hours-day__badge--closed">
            <Sticker variant="red" rotation={-4} size="lg">CERRADO</Sticker>
          </span>
        )}
        {weekend && (
          <span className="hours-day__badge hours-day__badge--weekend">
            <Sticker variant="yellow" rotation={-4} size="sm">FIN DE SEMANA</Sticker>
          </span>
        )}
      </div>
      <span className="hours-day__hours">{dayHours}</span>
    </li>
  );
};

export default HoursDay;
