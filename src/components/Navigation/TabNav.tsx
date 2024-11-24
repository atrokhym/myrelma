import { Target, Mail, Users, Briefcase, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { icon: Target, label: 'Target Companies', path: '/companies' },
  { icon: Mail, label: 'Messages', path: '/messages' },
  { icon: Users, label: 'Network Contacts', path: '/network' },
  { icon: Briefcase, label: 'Job Tracker', path: '/jobs' },
  { icon: RotateCcw, label: 'Progress Tracker', path: '/progress' },
];

const TabNav = () => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className={`flex items-center space-x-2 py-4 border-b-2 px-2 ${
              location.pathname === tab.path
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNav;