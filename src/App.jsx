import { useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <CounterButton count={count} onClick={handleClick} />
      <CounterButton count={count} onClick={handleClick} />
    </>
  );
}

export default App;
