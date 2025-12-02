import { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";

export default function MessageItem({
    _id,
    author,
    content,
    seen,
}) {
    const { messageClickHandler } = useContext(MessageContext)

    return (
        <li
            style={seen ? {} : { fontWeight: 'bold' }}
            onClick={() => messageClickHandler(_id)}
        >
            {author}: {content}
        </li>
    );
}
