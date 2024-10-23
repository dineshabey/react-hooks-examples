import React, { useState } from 'react'


export default function Counter() {
    const [count, setCounte] = useState(0); // Initialize state with 0
    // Function to handle count updates

    const counterChange = (action) => {
        switch (action) {
            case 'increase':
                setCounte(prevCount => prevCount + 1)
                break;
            case 'decrease':
                setCounte(prevCount => prevCount - 1)
                break;
            case 'reset':
                setCounte(0)
                break;

            default:
                break;
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter :{count}</h1>
            <button onClick={() => counterChange('increase')}>Increase</button>
            <button onClick={() => counterChange('decrease')}>Decrease</button>
            <button onClick={() => counterChange('reset')}>Reset</button>
        </div>
    )
}
