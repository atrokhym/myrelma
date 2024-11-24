import { Users, Star, Clock, ChevronDown } from 'lucide-react';

interface ContactsSidebarProps {
  currentView: 'all' | 'favorites' | 'recent';
  onViewChange: (view: 'all' | 'favorites' | 'recent') => void;
}

export const ContactsSidebar = ({ currentView, onViewChange }: ContactsSidebarProps) => {
  return (
    <div className="w-64 border-r p-4">
      <div className="space-y-2">
        <button
          onClick={() => onViewChange('all')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
            currentView === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Users className="h-5 w-5" />
          <span>All Contacts</span>
        </button>
        <button
          onClick={() => onViewChange('favorites')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
            currentView === 'favorites' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Star className="h-5 w-5" />
          <span>Favorites</span>
        </button>
        <button
          onClick={() => onViewChange('recent')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
            currentView === 'recent' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Clock className="h-5 w-5" />
          <span>Recently Added</span>
        </button>
      </div>
      
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Labels</h3>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg">
            <span>Work</span>
            <span className="text-sm text-gray-500">24</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg">
            <span>Personal</span>
            <span className="text-sm text-gray-500">12</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg">
            <span>Important</span>
            <span className="text-sm text-gray-500">8</span>
          </div>
        </div>
      </div>
    </div>
  );
};
