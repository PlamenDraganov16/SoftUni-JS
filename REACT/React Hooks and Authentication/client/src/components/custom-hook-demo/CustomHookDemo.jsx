import useFetch from "../../hooks/useFetch";

export default function CustomHookDemo() {
    const { data, isPending, error } = useFetch('http://localhost:3030/jsonstore/messenger', {});

    if (error) {
        return <h2>Not found</h2>
    }

    return (
        <>
            <h1>Custom Hook Demo</h1>
            {isPending
                ? <p>Loading...</p>
                : (
                    <ul style={{ listStyle: 'circle' }}>
                        {Object.values(data).map(message => <li key={message.content}>{message.content}</li>)}
                    </ul>
                )
            }

        </>
    );
}
