import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const messages = [
  {
    id: 1,
    type: 'message',
    title: 'Last Message from: Sasa',
    description: 'What do you want for dinner?',
    time: '2 min ago',
    icon: MessageCircle,
    iconBg: 'bg-blue-500'
  },
  {
    id: 2,
    type: 'email',
    title: 'Subject: Dinner',
    description: 'Jake, in summary, I am...',
    time: '2 hrs ago',
    icon: Mail,
    iconBg: 'bg-red-500'
  },
  {
    id: 3,
    type: 'email',
    title: 'Subject: Dinner',
    description: 'Jake, it was great seeing..',
    time: '1 day ago',
    icon: Mail,
    iconBg: 'bg-red-500'
  }
];

const RecentMessages = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Recent messages & emails</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${message.iconBg}`}>
              <message.icon className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{message.title}</p>
              <p className="text-sm text-gray-500 truncate">{message.description}</p>
            </div>
            <span className="text-xs text-gray-500">{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;