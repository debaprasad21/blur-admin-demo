// Converted from src/app/pages/dashboard/dashboardCalendar/DashboardCalendarCtrl.js

import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import baConfig from '../routes/baConfig';

const DashboardCalendarCtrl: React.FC = () => {
  const localizer = momentLocalizer(moment);
  const dashboardColors = baConfig.colors.dashboard;

  const [events, setEvents] = useState([
    {
      title: 'All Day Event',
      start: new Date('2016-03-01'),
      end: new Date('2016-03-01'),
      color: dashboardColors.silverTree,
    },
    {
      title: 'Long Event',
      start: new Date('2016-03-07'),
      end: new Date('2016-03-10'),
      color: dashboardColors.blueStone,
    },
    {
      title: 'Dinner',
      start: new Date('2016-03-14T20:00:00'),
      end: new Date('2016-03-14T22:00:00'),
      color: dashboardColors.surfieGreen,
    },
    {
      title: 'Birthday Party',
      start: new Date('2016-04-01T07:00:00'),
      end: new Date('2016-04-01T09:00:00'),
      color: dashboardColors.gossip,
    },
  ]);

  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    const title = window.prompt('Event Title:');
    if (title) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          title,
          start,
          end,
        },
      ]);
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default DashboardCalendarCtrl;
