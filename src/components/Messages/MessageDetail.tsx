interface MessageDetailProps {
  message: Message | null;
}

export const MessageDetail = ({ message }: MessageDetailProps) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">{message?.sender || 'Select a message'}</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {message ? (
            <div>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{message.sender}</span>
                <span>{message.timestamp?.toDate().toLocaleString()}</span>
              </div>
              <p className="text-gray-700">{message.content}</p>
            </div>
          ) : (
            <p className="text-gray-500">Select a message to view details</p>
          )}
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 rounded-lg border p-2"
            placeholder="Type your message..."
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};