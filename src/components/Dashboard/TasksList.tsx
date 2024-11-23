import React from 'react';
import { Calendar } from 'lucide-react';

const tasks = [
  {
    id: 1,
    name: 'Electricity bill payment',
    dueDate: '08 MAR',
    priority: 'High',
    status: 'Done'
  },
  {
    id: 2,
    name: 'Water Bills Payments',
    dueDate: '08 MAR',
    priority: 'Low',
    status: 'In progress'
  },
  {
    id: 3,
    name: 'Communication BP',
    dueDate: '08 MAR',
    priority: 'Medium',
    status: 'To do'
  },
  {
    id: 4,
    name: 'Water Bills Payments',
    dueDate: '08 MAR',
    priority: 'High',
    status: 'Done'
  },
  {
    id: 5,
    name: 'Communication BP',
    dueDate: '08 MAR',
    priority: 'Low',
    status: 'In progress'
  }
];

const priorityColors = {
  High: 'text-red-600',
  Medium: 'text-yellow-600',
  Low: 'text-blue-600'
};

const statusColors = {
  'Done': 'bg-green-100 text-green-800',
  'In progress': 'bg-blue-100 text-blue-800',
  'To do': 'bg-yellow-100 text-yellow-800'
};

const TasksList = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Today's tasks</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              Assigned to me
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-full">
              I Assigned to others
            </button>
          </div>
        </div>
        <button className="text-blue-600 text-sm">See all tasks</button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
                checked={task.status === 'Done'}
                onChange={() => {}}
              />
              <span className="font-medium">{task.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {task.dueDate}
              </div>
              <span className={`text-sm ${priorityColors[task.priority]}`}>
                {task.priority}
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${statusColors[task.status]}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;