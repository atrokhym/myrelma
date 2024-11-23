import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddIndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (industry: string) => void;
}

const AddIndustryModal = ({ isOpen, onClose, onAdd }: AddIndustryModalProps) => {
  const [industry, setIndustry] = useState('');

  if (!isOpen) return null;

  const handleAdd = () => {
    onAdd(industry);
    onClose();
    setIndustry('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add industry</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Industry name
          </label>
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="Enter industry name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-6">
          <button
            onClick={handleAdd}
            disabled={!industry}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Add Industry
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIndustryModal;