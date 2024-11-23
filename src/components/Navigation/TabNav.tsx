import React from 'react';
import { Target, Mail, Users, Briefcase, RotateCcw } from 'lucide-react';

const tabs = [
  { icon: Target, label: 'Target Companies', active: true },
  { icon: Mail, label: 'Campaign Emails' },
  { icon: Users, label: 'Network Contacts' },
  { icon: Briefcase, label: 'Job Tracker' },
  { icon: RotateCcw, label: 'Progress Tracker' },
];

const TabNav = () => {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8 px-6">
        {tabs.map((tab) => (
          <a
            key={tab.label}
            href="#"
            className={`flex items-center space-x-2 py-4 border-b-2 px-2 ${
              tab.active
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span>{tab.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TabNav;