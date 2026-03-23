import React, { useEffect, useState } from "react";

function UseEffect() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Filan fiteku"

        },
        {
            id: 2,
            name: "Filan Fisteku"
        }
    ])
    const [count, setCont] = useState(0)
    useEffect(() => {
        console.log("useeffect")
    }, [])

    useEffect(() => {
        console.log("clicked", count)
    }, [count])

    useEffect(() => {
        console.log("useeffect", employees)
    }, [employees])

    return (
        <div>
            <h1>Use Effect</h1>
            <button onClick={() => setCont(count + 1)}>
                increase
            </button>
            <br></br>
            {count}
        </div>
    )


}
export default UseEffect;