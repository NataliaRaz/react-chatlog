import React, { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  // const [entries, setEntries] = useState(chatMessages);
  const [entries, setEntries] = useState(
  chatMessages.map((msg) => ({ ...msg, liked: msg.liked ?? false }))
);

  const toggleLike = (id) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  const totalLikes = entries.filter((entry) => entry.liked).length;
  const localSender = "Vladimir";

  return (
    <div id="App">
      <header>
        <h1>Chat Log</h1>
        <p>{totalLikes} ❤️s</p>
      </header>
      <main>
        <ChatLog entries={entries} onToggleLike={toggleLike} localSender={localSender}
/>
      </main>
    </div>
  );
};


export default App;



