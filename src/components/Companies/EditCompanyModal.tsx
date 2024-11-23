import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Connection {
  id: string;
  name: string;
  avatar: string;
  selected?: boolean;
}

interface EditCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyName?: string;
  priority?: 'High' | 'Medium' | 'Low';
  connections?: Connection[];
  onSave: (data: { name: string; priority: string; connections: string[] }) => void;
}

const EditCompanyModal = ({
  isOpen,
  onClose,
  companyName = '',
  priority = 'Medium',
  connections = [],
  onSave,
}: EditCompanyModalProps) => {
  const [name, setName] = useState(companyName);
  const [selectedPriority, setSelectedPriority] = useState(priority);
  const [selectedConnections, setSelectedConnections] = useState<Connection[]>(connections);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      name,
      priority: selectedPriority,
      connections: selectedConnections.filter(c => c.selected).map(c => c.id),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Edit company</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter company name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Connections
            </label>
            <div className="border border-gray-300 rounded-md p-2 max-h-60 overflow-y-auto">
              {selectedConnections.length > 0 && (
                <div className="mb-2 text-sm text-red-500">
                  {selectedConnections.filter(c => c.selected).length} New connections found
                </div>
              )}
              {selectedConnections.map((connection) => (
                <div
                  key={connection.id}
                  className="flex items-center space-x-3 py-2 px-2 hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={connection.selected}
                    onChange={() => {
                      setSelectedConnections(
                        selectedConnections.map((c) =>
                          c.id === connection.id ? { ...c, selected: !c.selected } : c
                        )
                      );
                    }}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <img
                    src={connection.avatar}
                    alt={connection.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-sm">{connection.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCompanyModal;