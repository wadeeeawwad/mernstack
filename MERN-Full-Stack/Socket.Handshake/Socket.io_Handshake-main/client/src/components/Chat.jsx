import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export default () => {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
    console.log('Chat.jsx running!');
    socket.on('Welcome', data => console.log(data));

    return () => socket.disconnect(true);
}, []);

    return (
    <div className="App">
    <h1>Socket Test</h1>
    </div>
    );
}
