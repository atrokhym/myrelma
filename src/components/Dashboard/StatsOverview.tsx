import React from 'react';
import { Users, Building2 } from 'lucide-react';

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Users className="h-5 w-5 text-yellow-500" />
          <div>
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-gray-600">Total contacts</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <Building2 className="h-5 w-5 text-purple-500" />
          <div>
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-gray-600">Total companies</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg col-span-3">
        <div className="text-sm text-gray-600 mb-2">Job progress</div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-lg font-bold text-blue-500">50+</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-500">30+</div>
            <div className="text-sm text-gray-600">Applied</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-500">15+</div>
            <div className="text-sm text-gray-600">Interviewing</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-500">5+</div>
            <div className="text-sm text-gray-600">Offers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;