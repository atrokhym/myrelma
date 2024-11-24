import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const CalendarSidebar = () => {
  const [calendars, setCalendars] = useState({
    personal: true,
    work: true,
    family: true
  });

  const handleCalendarToggle = (calendar: keyof typeof calendars) => {
    setCalendars(prev => ({
      ...prev,
      [calendar]: !prev[calendar]
    }));
  };

  return (
    <div className="w-64 border-r p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">My Calendars</h3>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="rounded text-blue-500"
              checked={calendars.personal}
              onChange={() => handleCalendarToggle('personal')}
            />
            <span>Personal</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="rounded text-green-500"
              checked={calendars.work}
              onChange={() => handleCalendarToggle('work')}
            />
            <span>Work</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="rounded text-purple-500"
              checked={calendars.family}
              onChange={() => handleCalendarToggle('family')}
            />
            <span>Family</span>
          </label>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
            <div>
              <p className="font-medium">Team Meeting</p>
              <p className="text-sm text-gray-500">Today, 2:00 PM</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
            <div>
              <p className="font-medium">Project Review</p>
              <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};