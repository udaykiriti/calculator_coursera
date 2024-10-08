import React, { useState } from "react";
import "./App.css"; // Optional for custom styling

function App() {
  // States for input value and result
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Functions for calculator operations
  const add = () => setResult(result + Number(input));
  const subtract = () => setResult(result - Number(input));
  const multiply = () => setResult(result * Number(input));
  const divide = () => {
    if (Number(input) !== 0) {
      setResult(result / Number(input));
    } else {
      alert("Cannot divide by zero");
    }
  };

  // Function to reset input and result
  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <h2>{result}</h2>

      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />

      <div className="buttons">
        <button onClick={add}>add</button>
        <button onClick={subtract}>subtract</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </div>
    </div>
  );
}

export default App;
