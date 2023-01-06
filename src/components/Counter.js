import { useState } from 'react';


function Counter() {
    // the value we pass to the invocation of thr usrState is the inital statre our component needs 
    // the const state = useState(42); // [42, f]

    // const count = state[0];
    // const setCount = state[1];


    const [count, setCount] = useState(0);

    // Array destructuring assignment syntax

    // when the useState hook is invoked, it returns an array containing the init
    console.log(count, setCount);

    return (
        <>
            <span>Current Count: <span style={{color: count < 0 ? 'red' : 'black'}}>{count}</span></span>
            <section>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </section>
        </>
    );
}

export default Counter