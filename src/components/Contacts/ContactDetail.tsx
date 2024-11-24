import { User, Phone, Mail, MapPin, Star, Edit, Trash } from 'lucide-react';

interface ContactDetailProps {
  contact: {
    id: number;
    name: string;
    email: string;
    phone: string;
    address?: string;
    company?: string;
    position?: string;
    favorite: boolean;
  };
  onClose: () => void;
}

export const ContactDetail = ({ contact, onClose }: ContactDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="w-96 bg-white h-full">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{contact.name}</h3>
              <p className="text-gray-600">{contact.position}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <button className="flex-1 py-2 border rounded-lg hover:bg-gray-50">
              <Edit className="h-5 w-5 mx-auto" />
            </button>
            <button className="flex-1 py-2 border rounded-lg hover:bg-gray-50">
              <Star className="h-5 w-5 mx-auto" />
            </button>
            <button className="flex-1 py-2 border rounded-lg hover:bg-gray-50 text-red-500">
              <Trash className="h-5 w-5 mx-auto" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>{contact.email}</span>
              </div>
              {contact.address && (
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>{contact.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
