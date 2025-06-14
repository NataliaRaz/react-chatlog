import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

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

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
