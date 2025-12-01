import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

const Calendar = () => {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-8">
        <CalendarIcon className="text-primary" size={32} />
        <h1 className="text-3xl font-display font-bold text-navy-900">Calendar</h1>
      </div>
      <p className="text-gray-600">Schedule meetings and view deadlines.</p>
    </div>
  );
};

export default Calendar;