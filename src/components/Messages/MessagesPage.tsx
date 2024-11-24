import { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import { MessageDetail } from './MessageDetail';
import { MessagePreview } from './MessagePreview';
import { MessagesLayout } from './MessagesLayout';

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
  
  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
  };
  
  return (
    <MessagesLayout>
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="col-span-3 bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Messages</h2>
          </div>
          <div className="overflow-y-auto">
            {messages.map((message) => (
              <MessagePreview 
                key={message.id} 
                message={message} 
                onClick={() => handleMessageClick(message)}
              />
            ))}
          </div>
        </div>
        <div className="col-span-9 bg-white rounded-lg shadow">
          <MessageDetail message={selectedMessage} />
        </div>
      </div>
    </MessagesLayout>
  );
};