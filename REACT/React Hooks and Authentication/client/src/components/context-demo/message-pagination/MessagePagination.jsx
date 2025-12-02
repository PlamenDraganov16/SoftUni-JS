import { use } from "react";
import MessageContext from "../contexts/MessageContext";

export default function MessagePagination({
    pageSize,
}) {
    if (!pageSize) {
        return <p>No pageSize set!</p>
    }

    const { messages } = use(MessageContext);

    return (
        <p>Message Count: {messages.length}</p>
    );
}
