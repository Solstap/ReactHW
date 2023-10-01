import React, { useState } from "react";
import Controls from "./Controls"
import Display from "./Display"

function Counter() {
    const [counter, setCounter] = useState(0)
    
    return (
        <>
            <Display number={counter}/>
            <Controls updateNumber={setCounter}/>
        </>
    )
}

export default Counter