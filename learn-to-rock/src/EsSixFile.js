import React, { useState } from 'react';

function EsSix({ message }) {
    const [users, setUsers] = useState([
        { name: "Shashi", message: "Ya hoo" },
        { name: "Bhushan", message: "ta daa" },
        { name: "Bhagat", message: "Rum pum" }
    ])

    const [count, setCount] = useState(0);

    const changeValue = () => {
        console.log(users)
        setCount(count +1);
    }

    return (
        <div>
            {users.map(user => (
                <div className="color">
                    <div className="person">
                        <h1>{user.name}</h1>
                        <p>{user.message}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default EsSix;