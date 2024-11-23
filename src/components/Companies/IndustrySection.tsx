import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import CompanyCard from './CompanyCard';

interface IndustrySectionProps {
  title: string;
  companies: Array<{
    name: string;
    priority: 'High' | 'Medium' | 'Low';
    hasMessages?: boolean;
    hasContacts?: boolean;
    isActive?: boolean;
  }>;
}

const IndustrySection = ({ title, companies }: IndustrySectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Plus className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default IndustrySection;