import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, Users, Building2, Users2, FolderKanban, 
  MessageCircle, Calendar, FileText, ClipboardList, Files,
  Anchor
} from 'lucide-react';

const menuItems = [
  { icon: LayoutGrid, label: 'Dashboard', path: '/' },
  { icon: MessageCircle, label: 'Messages', path: '/messages', implemented: true },
  { icon: Calendar, label: 'Calendar', path: '/calendar', implemented: true },
  { icon: Users, label: 'Contacts', path: '/contacts', implemented: false },
  { icon: Building2, label: 'Companies', path: '/companies', implemented: true },
  { icon: Users2, label: 'Communities', path: '/communities', implemented: false },
  { icon: FolderKanban, label: 'Projects', path: '/projects', implemented: false },
  { icon: ClipboardList, label: 'Tasks', path: '/tasks', implemented: false },
  { icon: FileText, label: 'Notes', path: '/notes', implemented: false },
  { icon: Files, label: 'Files', path: '/files', implemented: false },
];

const Sidebar = () => {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent, implemented: boolean) => {
    if (!implemented) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          <Anchor className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-semibold">Myrelma</span>
        </Link>
      </div>
      <nav className="p-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || 
                          (item.path === '/' && location.pathname === '/dashboard');
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleClick(e, item.implemented !== false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-1 ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;