interface MessagePreviewProps {
  message: Message;
  onClick: () => void;
}
import { User } from 'lucide-react';

export const MessagePreview = ({ message, onClick }: MessagePreviewProps) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b"
    >
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
        <User className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h3 className="font-medium truncate">{message.sender}</h3>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
            {message.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message.content}</p>
      </div>
    </div>
  );
};