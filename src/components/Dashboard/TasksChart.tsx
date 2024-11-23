import React from 'react';

const TasksChart = () => {
  // This would typically use a charting library like Chart.js or Recharts
  // For now, we'll create a simple bar chart with CSS
  const data = [
    { day: 'Monday', todo: 60, inProgress: 40, completed: 50 },
    { day: 'Tuesday', todo: 40, inProgress: 45, completed: 90 },
    { day: 'Wednesday', todo: 50, inProgress: 75, completed: 35 },
    { day: 'Thursday', todo: 65, inProgress: 45, completed: 35 },
    { day: 'Friday', todo: 40, inProgress: 50, completed: 70 },
    { day: 'Saturday', todo: 40, inProgress: 65, completed: 75 },
    { day: 'Sunday', todo: 40, inProgress: 50, completed: 65 },
  ];

  return (
    <div className="h-64">
      <div className="flex h-full items-end space-x-8">
        {data.map((item) => (
          <div key={item.day} className="flex-1 space-y-2">
            <div className="relative h-48 flex space-x-1">
              <div
                className="w-4 bg-yellow-200 rounded"
                style={{ height: `${item.todo}%` }}
              />
              <div
                className="w-4 bg-blue-200 rounded"
                style={{ height: `${item.inProgress}%` }}
              />
              <div
                className="w-4 bg-green-200 rounded"
                style={{ height: `${item.completed}%` }}
              />
            </div>
            <div className="text-xs text-center text-gray-600">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksChart;