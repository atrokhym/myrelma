import { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { ContactsList } from './ContactsList';
import { ContactsSidebar } from './ContactsSidebar';
import { NewContactModal } from './NewContactModal';

export const ContactsPage = () => {
  const [view, setView] = useState<'all' | 'favorites' | 'recent'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSaveContact = (contactData: any) => {
    // Here we'll add contact saving logic later
    console.log('New contact:', contactData);
  };

  return (
    <div className="flex h-full">
      <ContactsSidebar currentView={view} onViewChange={setView} />
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
              />
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              <Plus className="h-5 w-5" />
              <span>Add Contact</span>
            </button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
        <ContactsList view={view} />
      </div>

      <NewContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveContact}
      />
    </div>
  );
};