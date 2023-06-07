import {useState, useReducer}from 'react'
import { countReducer, INITS_STATE } from "./counterReducer";

const Counting = () => {
const [state,dispatch] = useReducer(countReducer, INITS_STATE)


  return (
    <div>
      <h1>KINDERGARTEN COUNTING</h1>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Add</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Minus</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button
        onClick={() => dispatch({ type: "INCREASE_BY_ANY_AMOUNT", payload: 2 })}
      >
        Increase by any Amount
      </button>
    </div>
  );
}

export default Counting