import React, { useState } from 'react';
import { MoreHorizontal, Users, Pencil, Trash2 } from 'lucide-react';
import EditCompanyModal from './EditCompanyModal';
import ConnectionsDropdown from './ConnectionsDropdown';

interface Company {
  id: string;
  name: string;
  industry: string;
  priority: 'High' | 'Medium' | 'Low';
  contacts: Connection[];
  lastEdited: string;
}

interface Connection {
  id: string;
  name: string;
  avatar: string;
  selected?: boolean;
}

const mockConnections: Connection[] = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '2',
    name: 'Emily Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: '3',
    name: 'Michael Williams',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const companies: Company[] = [
  {
    id: '1',
    name: 'Stripe',
    industry: 'Fintech',
    priority: 'Medium',
    contacts: mockConnections.slice(0, 2),
    lastEdited: '02/03/2024',
  },
  {
    id: '2',
    name: 'Robinhood',
    industry: 'Software',
    priority: 'High',
    contacts: mockConnections.slice(1, 3),
    lastEdited: '02/05/2024',
  },
];

const CompanyList = () => {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);
  const [connectionsDropdownOpen, setConnectionsDropdownOpen] = useState<string | null>(null);

  const handleEdit = (company: Company) => {
    setActiveCompany(company);
    setEditModalOpen(true);
  };

  const handleSave = (data: { name: string; priority: string; connections: string[] }) => {
    // Handle save logic here
    console.log('Saving:', data);
  };

  const handleAddToNetwork = (companyId: string, connectionIds: string[]) => {
    // Handle adding connections to network
    console.log('Adding connections:', connectionIds, 'to company:', companyId);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {selectedCompanies.length > 0 && (
        <div className="p-4 border-b border-gray-200 flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <Pencil className="h-4 w-4" />
            <span>Edit</span>
          </button>
          <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </button>
        </div>
      )}

      <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 text-sm font-medium text-gray-500">
        <div>Company name</div>
        <div>Contacts</div>
        <div>Industry</div>
        <div>Priority</div>
        <div>Last edited</div>
      </div>

      {companies.map((company) => (
        <div
          key={company.id}
          className="grid grid-cols-5 gap-4 p-4 border-b border-gray-200 items-center hover:bg-gray-50"
        >
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCompanies.includes(company.id)}
              onChange={(e) => {
                setSelectedCompanies(
                  e.target.checked
                    ? [...selectedCompanies, company.id]
                    : selectedCompanies.filter((id) => id !== company.id)
                );
              }}
              className="rounded border-gray-300"
            />
            <span className="font-medium">{company.name}</span>
          </div>
          <div className="relative">
            <button
              onClick={() => setConnectionsDropdownOpen(
                connectionsDropdownOpen === company.id ? null : company.id
              )}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
            >
              <Users className="h-4 w-4" />
              <span>{company.contacts.length}</span>
            </button>
            {connectionsDropdownOpen === company.id && (
              <ConnectionsDropdown
                connections={mockConnections}
                onAddToNetwork={(connections) => handleAddToNetwork(company.id, connections)}
                onClose={() => setConnectionsDropdownOpen(null)}
              />
            )}
          </div>
          <div>{company.industry}</div>
          <div className={`text-${company.priority.toLowerCase()}-600`}>
            {company.priority}
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <span>{company.lastEdited}</span>
            <button
              onClick={() => handleEdit(company)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}

      {editModalOpen && activeCompany && (
        <EditCompanyModal
          isOpen={editModalOpen}
          onClose={() => {
            setEditModalOpen(false);
            setActiveCompany(null);
          }}
          companyName={activeCompany.name}
          priority={activeCompany.priority}
          connections={activeCompany.contacts}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default CompanyList;