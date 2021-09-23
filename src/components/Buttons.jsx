import React, { useState } from "react";
//import video from "../data/video.js";

function Buttons() {
    const [count, setCount] = useState(9210)
    const [secCount, setsecCount] = useState(185)

    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setsecCount(secCount - 1)
    }
    return (
        <>
            <button style={{border: "1px solid black"}} onClick={increment}>{count}👍</button>
            <button style={{border: "1px solid black"}} onClick={decrement}>{secCount}👎</button>
        </>
    )
}

export default Buttons;