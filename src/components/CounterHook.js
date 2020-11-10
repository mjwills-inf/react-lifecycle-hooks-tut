import React, { useState } from 'react'

const CounterHook = () => {

  // returns a state value, and a function to amend that value (setState equiv)
  // convention to call second value like first just with 'set' infront
  // (0) initialises state with that value
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

export default CounterHook;