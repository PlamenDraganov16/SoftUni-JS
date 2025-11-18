// import("../utils/calcUtil.js")

import { lazy, Suspense } from "react"

//     .then(calc => console.log(calc.sum(5,10)));
const SeparateBundle = lazy(() => import('./SeparateBundle.jsx'));


export default function CodeSplitting() {

    return (
        <>
        <h2>Code Splitting</h2>

        <Suspense fallback={<p>Loading...</p>}>
            <SeparateBundle />
        </Suspense> 
        
        </>
    )
}