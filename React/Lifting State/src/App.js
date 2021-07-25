import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';


function App() {


  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const writeMessage = (newMessage) => {
    setCurrentMsg(newMessage);
  }


  return (
    <>
      <MessageForm onNewMessage={writeMessage} />
      <MessageDisplay message={currentMsg} />
    </>
  );
}

export default App;
