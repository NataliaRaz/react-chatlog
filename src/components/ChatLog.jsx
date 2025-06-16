import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, onToggleLike, localSender }) => {
  return (
    <div className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleLike={onToggleLike}
          isLocal={entry.sender === localSender}
        />
      ))}
    </div>
  );
};

export default ChatLog;