import { useEffect, useRef } from "react"

export default function Ref() {
    const myRef = useRef();

    const focusHandler = () => {
        myRef.current.focus();
    }

    useEffect(() => {
        myRef.current.focus();
    }, [])

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Use ref hook</h1>

            <form >
                <input
                    type="text"
                    ref={myRef}
                    className="border px-3 py-2 rounded-md"
                />
            </form>

            <button
                onClick={focusHandler}
                className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-md"
            >
                Focus
            </button>
        </div>
    )
}