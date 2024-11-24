interface MessagePreviewProps {
  message: Message;
  onClick: () => void;
}

export const MessagePreview = ({ message, onClick }: MessagePreviewProps) => {
  return (
    <div 
      onClick={onClick}
      className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${!message.isRead ? 'bg-blue-50' : ''}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{message.sender}</span>
        <span className="text-sm text-gray-500">
          {message.timestamp?.toDate().toLocaleDateString()}
        </span>
      </div>
      <p className="text-sm text-gray-600 truncate">{message.content}</p>
    </div>
  );
};