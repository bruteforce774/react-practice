import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incrementCounter() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>
        <button onClick={incrementCounter}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App