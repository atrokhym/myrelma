import React from 'react';
import { Search, Plus } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <div className="relative flex-1 max-w-lg">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search company..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-600">
        <Plus className="h-5 w-5" />
        <span>Add company</span>
      </button>
    </div>
  );
};

export default SearchBar;