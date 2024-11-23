import React from 'react';
import { MoreHorizontal, Users } from 'lucide-react';

interface CompanyCardProps {
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  hasMessages?: boolean;
  hasContacts?: boolean;
  isActive?: boolean;
}

const priorityColors = {
  High: 'text-red-600',
  Medium: 'text-yellow-600',
  Low: 'text-blue-600',
};

const CompanyCard = ({ name, priority, hasMessages, hasContacts, isActive }: CompanyCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center space-x-2">
          {hasMessages && (
            <span className="w-2 h-2 bg-red-500 rounded-full" title="New messages" />
          )}
          {hasContacts && (
            <span className="flex items-center text-blue-500">
              <Users className="h-4 w-4" />
            </span>
          )}
          {isActive && (
            <span className="w-2 h-2 bg-green-500 rounded-full" title="Active" />
          )}
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
      <div className={`text-sm ${priorityColors[priority]}`}>{priority}</div>
    </div>
  );
};

export default CompanyCard;