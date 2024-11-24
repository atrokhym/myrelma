interface MessagesLayoutProps {
  children: React.ReactNode;
}

export const MessagesLayout = ({ children }: MessagesLayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
};
