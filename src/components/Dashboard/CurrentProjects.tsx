import React from 'react';
import { FileEdit, Link2, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Where Imagination Meets code',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&h=200',
    date: '07 MAR',
    priority: 'Medium',
    assignedTo: [
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
    ]
  },
  {
    id: 2,
    title: 'Crafting Digital Dreams into Reality',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=200',
    date: '07 MAR',
    priority: 'Medium',
    assignedTo: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
    ]
  }
];

const CurrentProjects = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Current Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-24 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center text-sm text-yellow-600">
                    <span className="h-2 w-2 rounded-full bg-yellow-400 mr-1" />
                    {project.priority}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {project.assignedTo.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt="Team member"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <FileEdit className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <Link2 className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentProjects;