import { useParams, useSearchParams } from "react-router"

export default function City() {
    const params = useParams();
    const [searchParams] = useSearchParams();

    console.log(searchParams.get('orderBy'));

    return (
        <>
            <h2>City Page!</h2>

            <p>The name of the city is : {params.city}</p>
        </>
    )
}