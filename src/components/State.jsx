import React, { useState } from "react";
function State() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const [show, setShow] = useState(true);
    const [users, setUseser] = useState([
        { id: 1, firstName: "Egzon", role: "instructore" },
        { id: 1, firstName: "Egzon", role: "instructore" },
        { id: 1, firstName: "Egzon", role: "instructore" },
    ])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                increase
            </button>
            <h1>{count}</h1>
            <div>
                <input type="text"
                    onChange={(e) => setName(e.target.value)} />
                <h1>{name}</h1>
            </div>
            <div>{show && <p>this is hidden</p>}
            </div>
            <div>
                {users.map(user => (

                    <p key={user.id}>{user.firstName} {user.role}</p>
                ))}
            </div>
        </div>


    )

}
export default State;