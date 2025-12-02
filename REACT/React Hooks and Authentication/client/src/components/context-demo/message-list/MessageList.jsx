import { useContext } from "react";
import MessageItem from "./message-item/MessageItem";
import MessageContext from "../contexts/MessageContext";

export default function MessageList() {
    const { messages } = useContext(MessageContext);

    return (
        // <MessageContext.Consumer>
        //     {({ messages }) =>
        //         messages.map(message => <MessageItem key={message._id} {...message} />)
        //     }
        // </MessageContext.Consumer>

        <ul>
            {messages.map(message => <MessageItem key={message._id} {...message} />)}
        </ul>
    );
}
