import { useState } from 'react';

interface NewContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (contact: any) => void;
}

export const NewContactModal = ({ isOpen, onClose, onSave }: NewContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    label: 'Work'
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Add New Contact</h2>
        </div>
        
        <form className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.phone}
              onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.company}
              onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.position}
              onChange={e => setFormData(prev => ({ ...prev, position: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Label</label>
            <select
              className="w-full border rounded-lg px-3 py-2"
              value={formData.label}
              onChange={e => setFormData(prev => ({ ...prev, label: e.target.value }))}
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Important</option>
            </select>
          </div>
        </form>
        
        <div className="p-6 border-t flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(formData);
              onClose();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
};
