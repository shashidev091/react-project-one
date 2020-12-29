import React, { useState } from 'react';

function EsSix({ message }) {

    const [users] = useState([
        { name: "Shashi", message: "Ya hoo" },
        { name: "Bhushan", message: "ta daa" },
        { name: "Bhagat", message: "Rum pum" }
    ]);

    const [count, setCount] = useState(0);

    const changeValue = () => {
        setCount(count +1);
    }

    return (
        <div>
            {users.map(user => (
                <div className="color">
                    <div className="person">
                        <h1>{user.name}</h1>
                        <p>{user.message}</p>
                        <p>
                            {count}
                        </p>
                    </div>
                </div>
            ))}
            <button onClick={changeValue}>hello</button>
        </div>
    );
}

export default EsSix;