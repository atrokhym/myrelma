import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import IndustryList from './IndustryList';
import AddCompanyModal from './AddCompanyModal';

const CompanyGrid = () => {
  const [addCompanyModalOpen, setAddCompanyModalOpen] = useState(false);

  const handleAddCompany = (data: { name: string; industry: string; priority: string }) => {
    // Handle adding company logic here
    console.log('Adding company:', data);
  };

  return (
    <div className="relative">
      <div className="sticky top-0 z-10 bg-gray-50 py-4 px-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Search company..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={() => setAddCompanyModalOpen(true)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-600"
          >
            <Plus className="h-5 w-5" />
            <span>Add company</span>
          </button>
        </div>
      </div>

      <IndustryList />

      <AddCompanyModal
        isOpen={addCompanyModalOpen}
        onClose={() => setAddCompanyModalOpen(false)}
        onAdd={handleAddCompany}
      />
    </div>
  );
};

export default CompanyGrid;