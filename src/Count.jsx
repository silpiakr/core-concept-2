import { useState } from "react"

export default function () {
    const [count, setCount] = useState(0);
    
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        // const newCount = count - 1;
        setCount(count - 1);
    }
    return (
        <div style={{
            border:'2px solid red',
            padding:'20px',
            borderRadius: '15px'
            }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}