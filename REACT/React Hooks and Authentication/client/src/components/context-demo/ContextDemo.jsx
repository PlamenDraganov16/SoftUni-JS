import useFetch from "../../hooks/useFetch";
import MessageContext from "./contexts/MessageContext";

import MessageList from "./message-list/MessageList";
import MessagePagination from "./message-pagination/MessagePagination";

const transformMessages = (result) => {
    return Object.keys(result).map(key => ({
        _id: key,
        ...result[key],
        seen: false,
    }));
}

export default function ContextDemo() {
    const {
        data: messages,
        setData: setMessages,
    } = useFetch('http://localhost:3030/jsonstore/messenger', [], transformMessages);

    const messageClickHandler = (messageId) => {
        setMessages(state => state.map(m => m._id === messageId ? { ...m, seen: true } : m))
    };

    return (
        <>
            <h1>Context Demo</h1>

            <MessageContext.Provider value={{messages, messageClickHandler}}>
                <MessageList />

                <MessagePagination pageSize={3} />
            </MessageContext.Provider>
        </>
    );
}
