import { createContext } from "react";

const MessageContext = createContext({
    messages: [],
    messageClickHandler() {}
});

export default MessageContext;
