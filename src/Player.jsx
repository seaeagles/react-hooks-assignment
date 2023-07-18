import React from "react";
import { useState } from "react";

function Player({ name }) {
    const [score, setScore] = useState(0);

    const increment = () => {
      setScore(score + 1);
    };
  
    const decrement = () => {
      setScore(score - 1);
    };
  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {name}
        <h2 className="text-center"></h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <button onClick={increment}>+</button>
          <button className="btn btn-outline-primary w-100">Add Point +</button>
        </div>
        <div className="col-md-6">
        <button onClick={decrement}>-</button>
          <button className="btn btn-outline-danger w-100">
            Remove Point -
          </button>
        </div>
      </div>
    </div>
  );
}
export default Player;
