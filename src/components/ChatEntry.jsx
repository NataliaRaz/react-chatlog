// import React from 'react';
// import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onToggleLike }) => {
  const heart = liked ? '❤️' : '🤍';
return (
    <div className="chat-entry">
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

// ChatEntry.propTypes = {
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired,
// };

// export default ChatEntry;
