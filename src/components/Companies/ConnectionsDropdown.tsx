import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface Connection {
  id: string;
  name: string;
  avatar: string;
  selected?: boolean;
}

interface ConnectionsDropdownProps {
  connections: Connection[];
  onAddToNetwork: (connections: string[]) => void;
  onClose: () => void;
}

const ConnectionsDropdown = ({
  connections,
  onAddToNetwork,
  onClose,
}: ConnectionsDropdownProps) => {
  const [selectedConnections, setSelectedConnections] = useState<Connection[]>(connections);

  const handleAddToNetwork = () => {
    onAddToNetwork(selectedConnections.filter(c => c.selected).map(c => c.id));
    onClose();
  };

  return (
    <div className="absolute mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-900">Connections</h3>
          {connections.length > 0 && (
            <p className="text-sm text-red-500 mt-1">
              {connections.filter(c => !c.selected).length} New connections found
            </p>
          )}
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {selectedConnections.map((connection) => (
            <div
              key={connection.id}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md"
            >
              <div className="flex-shrink-0">
                <img
                  src={connection.avatar}
                  alt={connection.name}
                  className="h-8 w-8 rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {connection.name}
                </p>
              </div>
              <div className="flex-shrink-0">
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
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddToNetwork}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Add to Network
        </button>
      </div>
    </div>
  );
};

export default ConnectionsDropdown;