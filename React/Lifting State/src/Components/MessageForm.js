import react, { useState } from 'react';


const MessageForm = (props) => {

    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg)
        setMsg("")

        // what should we do with the message?
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                className={"ssss"}
                placeholder="Enter your message here"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};

export default MessageForm;