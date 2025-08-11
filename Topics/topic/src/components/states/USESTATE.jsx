import { useState } from "react";
import Styles from "./STATE.module.css";

const USESTATE = () => {
  const [count, setCount] = useState(0);
  const [mala, setMala] = useState(0);
  const CountHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  if (count === 108) {
    alert("RADHA RANI WILL BLESS U. YOU COMPLETED ONE MALA");
    setCount(0);
    setMala((prevMala) => prevMala + 1);
  }
  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-4">
        <h1 className="text-primary mb-4">RADHA COUNTER (UseState)</h1>
        <h1 className="text-primary mb-4">RADHA RADHA :- {count}</h1>
        <h1 className="text-primary mb-4">MALA :- {mala}</h1>
        <button className="btn btn-lg btn-success" onClick={CountHandler}>
          COUNTER
        </button>
      </div>
    </div>
  );
};

export default USESTATE;
