import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        //setCount(count + 1);  not recommended way
        setCount(prevState => prevState + 1) // Race condition safe
    }

    return (
        <section>
            <h2>Counter</h2>

            <div>Count: {count}</div>
            <br />
            <button onClick={incrementClickHandler}>+</button>
        </section>
    )
}