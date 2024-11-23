import React from 'react';
import { Bell, Calendar, MessageCircle, Settings, ChevronLeft, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Calendar className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MessageCircle className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">{user?.email}</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg" onClick={handleSignOut}>
              <LogOut className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;