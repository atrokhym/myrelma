import { Paperclip, Send, Image, Smile } from 'lucide-react';

interface MessageDetailProps {
  message: Message | null;
}

export const MessageDetail = ({ message }: MessageDetailProps) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-6 overflow-y-auto">
        {message ? (
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium">{message.sender}</span>
                    <span className="text-xs text-gray-500">
                      {message.timestamp?.toDate().toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{message.content}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Paperclip className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Image className="h-5 w-5 text-gray-500" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border-0 focus:ring-0 px-4 py-2 bg-gray-100 rounded-full"
          />
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Smile className="h-5 w-5 text-gray-500" />
          </button>
          <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

