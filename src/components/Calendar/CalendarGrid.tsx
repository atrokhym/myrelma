interface CalendarGridProps {
  view: 'month' | 'week' | 'day';
}

export const CalendarGrid = ({ view }: CalendarGridProps) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="flex-1 p-4">
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {weekDays.map(day => (
          <div key={day} className="bg-white p-4 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="bg-white p-4 min-h-[120px] relative">
            <span className="text-sm text-gray-500">{i + 1}</span>
            {/* Event placeholders */}
            {i === 15 && (
              <div className="absolute inset-x-2 top-12 bg-blue-100 text-blue-700 p-1 rounded text-sm">
                Team Meeting
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
