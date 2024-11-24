import { User, Star, MoreVertical } from 'lucide-react';

interface ContactsListProps {
  view: 'all' | 'favorites' | 'recent';
}

export const ContactsList = ({ view }: ContactsListProps) => {
  const contacts = [
    { id: 1, name: 'John Smith', email: 'john.smith@example.com', phone: '+1 234 567 890', label: 'Work', favorite: true },
    { id: 2, name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 234 567 891', label: 'Personal' },
    { id: 3, name: 'Michael Brown', email: 'm.brown@example.com', phone: '+1 234 567 892', label: 'Important' },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-1 gap-px bg-gray-200">
        {contacts.map(contact => (
          <div key={contact.id} className="bg-white p-4 flex items-center hover:bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <User className="h-6 w-6 text-gray-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{contact.name}</h3>
                <div className="flex items-center space-x-2">
                  <button className={`p-1 rounded-full ${contact.favorite ? 'text-yellow-400' : 'text-gray-400 hover:text-gray-600'}`}>
                    <Star className="h-5 w-5" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">{contact.email}</p>
              <p className="text-sm text-gray-600">{contact.phone}</p>
              <span className="inline-block mt-1 px-2 py-1 text-xs rounded bg-gray-100 text-gray-600">
                {contact.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
