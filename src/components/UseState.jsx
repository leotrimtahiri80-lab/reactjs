import React, { useState } from "react";

function UseStateComponent() {
    const [count, setCount] = useState(0);
    const [isOn, setisON] = useState(true);
    const [countDisable, setCountDisable] = UseState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)} disabled={count >= 10}>
                clik me
            </button>
            <p>clicks:{count}</p>
            {count >= 10 && <p>button is disablee</p>}
            <button onClick={() => setisON(!isOn)}>
            </button>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
            <button onClick={() => setCount(0)}>Restart</button>
            <p>{count}</p>
            <button onClick={() => setisON(!isOn)}>
                {isOn ? "ON" : "OFF"}
            </button>
            {
                isOn && <p>hide me</p>
            }
            {
                count > 10 && <p style={{ color: count > 10 ? 'red' : 'black' }} > you reached max {count}</p>
            }




        </div >

    )
}

export default UseStateComponent;