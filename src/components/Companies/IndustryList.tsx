import React, { useState } from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import AddIndustryModal from './AddIndustryModal';

interface Industry {
  id: string;
  name: string;
  companies: Array<{
    id: string;
    name: string;
    priority: 'High' | 'Medium' | 'Low';
    hasMessages?: boolean;
    hasContacts?: boolean;
    isActive?: boolean;
  }>;
}

const IndustryList = () => {
  const [industries, setIndustries] = useState<Industry[]>([
    {
      id: '1',
      name: 'Fintech',
      companies: [
        { id: '1', name: 'Intuit', priority: 'High', hasMessages: true },
        { id: '2', name: 'Stripe', priority: 'Medium', hasContacts: true },
      ],
    },
    {
      id: '2',
      name: 'Software',
      companies: [
        { id: '3', name: 'Microsoft', priority: 'High', isActive: true },
        { id: '4', name: 'Apple', priority: 'Medium', hasContacts: true },
      ],
    },
  ]);

  const [addIndustryModalOpen, setAddIndustryModalOpen] = useState(false);

  const handleAddIndustry = (industryName: string) => {
    const newIndustry: Industry = {
      id: Date.now().toString(),
      name: industryName,
      companies: [],
    };
    setIndustries([...industries, newIndustry]);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Industries</h2>
        <button
          onClick={() => setAddIndustryModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus className="h-5 w-5" />
          <span>Add industry list</span>
        </button>
      </div>

      <div className="space-y-6">
        {industries.map((industry) => (
          <div key={industry.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">{industry.name}</h3>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industry.companies.map((company) => (
                <div
                  key={company.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{company.name}</span>
                    <span className={`text-sm text-${company.priority.toLowerCase()}-600`}>
                      {company.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AddIndustryModal
        isOpen={addIndustryModalOpen}
        onClose={() => setAddIndustryModalOpen(false)}
        onAdd={handleAddIndustry}
      />
    </div>
  );
};

export default IndustryList;