import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='column'>
      <h1>Counter</h1>
      <p id="counter">{count}</p>

      <div className='counter_buttons'>
        <button id="minus-btn" onClick={() => setCount(prev => prev - 1)}>-</button>
        <button id="plus-btn" onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>
    </div>
  )
}
