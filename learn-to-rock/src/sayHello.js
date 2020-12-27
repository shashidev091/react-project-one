import React from 'react';
import './SayHello.css';

function Hello({name, age}) {
    return (
        <div className="color">
            <div className="person">
                <h1>{name}</h1>
                <p>Age : {age}</p>
            </div>
        </div>
    );
}

export default Hello;