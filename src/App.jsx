import React, { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

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

// const App = () => {
//   const exampleMessage = chatMessages[0];
//   return (
//     <div id="App">
//       <header>
//         <h1>Application title</h1>
//       </header>
//       <main>
//         <ChatEntry
//           sender={exampleMessage.sender}
//           body={exampleMessage.body}
//           timeStamp={exampleMessage.timeStamp}
//         />
//       </main>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div id="App">
//       <header>
//         <h1>Application title</h1>
//       </header>
//       <main>
//         <ChatLog entries={chatMessages} />
//       </main>
//     </div>
//   );
// };




