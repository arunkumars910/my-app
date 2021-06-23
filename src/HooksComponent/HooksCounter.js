import React, { useState } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((count) => count + 1);
    }
  };
  
  return (
    <div>
      <h1>Count - {count}</h1>
      {/* <button onClick={()=>setCount(count+1)}>ClickHere</button> */}
      <button onClick={incrementFive}>incrementFive</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
      <h1>This is function based component</h1>
    </div>
  );
}

export default HooksCounter;
