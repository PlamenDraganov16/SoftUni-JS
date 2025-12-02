import { useEffect, useState } from "react";

export default function useFetch(url, initialState, transform = data => data) {
    const [data, setData] = useState(initialState);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.text);
                }

                return response.json()
            })
            .then(result => {
                setData(transform(result));
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsPending(false);
            });

        return () => {
            abortController.abort();
        }
    }, [url, refresh]);

    const refetch = () => {
        setRefresh(state => !state);
    };

    return { data, setData, isPending, error, refetch };
}
