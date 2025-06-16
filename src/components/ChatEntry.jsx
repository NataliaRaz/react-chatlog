import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleLike, isLocal }) => {
  const heart = liked ? '❤️' : '🤍';
  const entryClass = isLocal ? 'chat-entry local' : 'chat-entry remote';
return (
  <div className={entryClass}>
    <h2 className="entry-name">{sender}</h2>
    <section className="entry-bubble">
      <p>{body}</p>
      <p className="entry-time"><TimeStamp time={timeStamp} /></p>
      <button className="like-button" onClick={() => onToggleLike(id)}>
        {heart}
      </button>
    </section>
  </div>
);
};

export default ChatEntry;