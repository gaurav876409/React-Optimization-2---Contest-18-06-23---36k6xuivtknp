import React, { Profiler, useMemo, useCallback } from "react";
import { useState } from "react";
import "../styles/App.css";
import calculateAllPrimes from "../function";

const App = () => {
  return <OptimizeTheOperation />;
};

const OptimizeTheOperation = ({ onClick }) => {
  const [number, setNumber] = useState(10000);

  // const prime = primeNumber(number);
  const prime = useCallback(() => calculateAllPrimes(number), [number]);

  const submitHandler = (event) => {
    event.preventDefault();
    setNumber(Number(event.target.num.value));
  };

  return (
    <div>
      <br />
      Enter the number:
      <form onSubmit={submitHandler}>
        <input id="num" />
        <button id="submit" type="submit" onClick={OptimizeTheOperation}>
          Click me 
        </button>
      </form>
      <br />
      <div className="width">
        Result of expensive operation:
        <ul>
          {prime().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default App;
