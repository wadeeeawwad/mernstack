// Import/Install Express & cors
const express = require("express");

// Set Express to a variable (app), and set the selected port to a variable(port), this part is Optional.
const app = express();
const port = 8000;

// Set app to listen for selected port and console.log a message to verify connectivity
const server = app.listen(port, () => console.log(`server.js: Listening to port ${port}`));

const io = require("socket.io")(server);

io.on("connection", socket => {
    console.log(socket.id);
    console.log("Nice to meet you. (shake hand)");
    socket.emit("Hello Human!");
});