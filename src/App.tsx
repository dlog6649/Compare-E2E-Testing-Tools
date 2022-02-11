import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <input data-testid={"counter"} value={count}/>
      <button data-testid={"plus-btn"} onClick={() => setCount(count+1)}>{"+"}</button>
      <button data-testid={"minus-btn"} onClick={() => setCount(count-1)}>{"-"}</button>
    </div>
  );
}

export default App;
