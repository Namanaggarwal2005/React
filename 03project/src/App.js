// import './App.css';
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  return (
    <>
    <h1>
      Hello World!
    </h1>
    <h2>Counter: {counter}</h2>
    <button onClick={() => {setCounter(counter + 1); console.log(counter);}}>Increment</button>
    <button onClick={() => {setCounter(counter - 1); console.log(counter);}}>Decrement</button>
    </>
  );
}

export default App;
