import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { CalendarLayout } from './CalendarLayout';
import { CalendarGrid } from './CalendarGrid';
import { CalendarSidebar } from './CalendarSidebar';

export const CalendarPage = () => {
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  
  return (
    <div className="flex h-full">
      <CalendarSidebar />
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              New Event
            </button>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="text-lg font-semibold">April 2024</h2>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setView('month')}
              className={`px-4 py-2 rounded ${view === 'month' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              Month
            </button>
            <button 
              onClick={() => setView('week')}
              className={`px-4 py-2 rounded ${view === 'week' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              Week
            </button>
            <button 
              onClick={() => setView('day')}
              className={`px-4 py-2 rounded ${view === 'day' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              Day
            </button>
          </div>
        </div>
        <CalendarGrid view={view} />
      </div>
    </div>
  );
};
