import React from 'react';

const DashboardCalendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = 7; // Hardcoded for demo

  return (
    <div className="mt-4">
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {days.map((day) => (
          <div key={day} className="text-xs text-gray-500">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`
              aspect-square flex items-center justify-center rounded-full text-sm
              ${day === currentDate ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700'}
            `}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCalendar;