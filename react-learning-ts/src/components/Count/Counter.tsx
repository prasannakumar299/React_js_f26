import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    // This useEffect will run only once when the component mounts and will log a message to the console. It also returns a cleanup function that will log a message when the component unmounts.
    useEffect(() => {
        console.log("Counter component mounted");
        return () => {
            console.log("Counter component unmounted");
        }
    }, []);

    // This useEffect will run every time the count state changes and will log the current count value to the console. It also returns a cleanup function that will log a message when the component unmounts or before the next effect runs.
    useEffect(() => {
        console.log("Counter component mounted");
        return () => {
            console.log("Counter component unmounted");
        }
    }, [count]);


const decreaseHandler = () => {
if(count === 0) return;
    setCount(count - 1);

};

const increaseHandler = () => {
    setCount(count + 1);
}


    return (
        <div>
            <h1>Counter Component</h1>
            <button onClick={increaseHandler}>Increment</button>
            <h1>Counter: {count}</h1>
            <button onClick={decreaseHandler}>Decrease</button>
            </div>
    )
}

export default Counter;

