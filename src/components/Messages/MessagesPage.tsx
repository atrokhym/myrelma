import { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { MessageDetail } from './MessageDetail';
import { MessagePreview } from './MessagePreview';
import { MessagesLayout } from './MessagesLayout';
import { Search, MoreVertical } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

export const MessagesPage = () => {
  const { messages } = useData();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  
  return (
    <MessagesLayout>
      <div className="flex h-full">
        {/* Left Sidebar - 280px */}
        <div className="w-[280px] border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b">
            <button className="w-full bg-blue-500 text-white rounded-lg px-4 py-2">
              New Message
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map((message) => (
              <MessagePreview 
                key={message.id} 
                message={message} 
                onClick={() => setSelectedMessage(message)}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-lg font-semibold">{selectedMessage?.sender || 'Select Conversation'}</h2>
              <span className="text-sm text-gray-500">• Active now</span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          <MessageDetail message={selectedMessage} />
        </div>
      </div>
    </MessagesLayout>
  );
};