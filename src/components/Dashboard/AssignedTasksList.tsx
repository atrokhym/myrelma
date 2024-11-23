import React from 'react';
import { Calendar } from 'lucide-react';

const tasks = [
  {
    id: 1,
    name: 'Crypto-Project Brief Requirement',
    assignedTo: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
    ],
    dueDate: '08 MAR',
    priority: 'High',
    status: 'Done'
  },
  {
    id: 2,
    name: 'Transforming Concepts into Aesthetics',
    assignedTo: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
    ],
    dueDate: '08 MAR',
    priority: 'Low',
    status: 'In progress'
  },
  {
    id: 3,
    name: 'Crafting Digital Dreams into Reality',
    assignedTo: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
    ],
    dueDate: '08 MAR',
    priority: 'Medium',
    status: 'To do'
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

const AssignedTasksList = () => {
  return (
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
            <div>
              <span className="font-medium block">{task.name}</span>
              <div className="flex -space-x-2 mt-2">
                {task.assignedTo.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt="Team member"
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>
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
  );
};

export default AssignedTasksList;