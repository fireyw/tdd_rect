import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button
            data-testid="minus-button"
            disabled={disabled}
            onClick={() => setCounter((count) => count - 1)}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={disabled}
            onClick={() => setCounter((count) => count + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
