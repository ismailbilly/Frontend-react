import {useReducer} from 'react'
import { INITIAL_STATE, countReducer } from './postReducer'
const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, INITIAL_STATE)
  return (
    <div
      style={{
        
        height: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Counter
      </h1>
      <div style={{ maxWidth: "50rem", margin: "10rem auto 0" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            padding: ".5rem 1rem",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          {state.counter}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundImage:
                "linear-gradient(274deg, #a94793, #69c5c4, #94fa89)",
              color: "black",
            }}
            onClick={() => dispatch({ type: "INCREASE" })}
          >
            Increase
          </button>
          <button
            style={{
              backgroundImage:
                "linear-gradient(305deg, #70f702, #8a4789, #67a4f1)",
            }}
            onClick={() => {
              dispatch({ type: "DECREASE" });
            }}
          >
            Decrease
          </button>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <button
            onClick={() => dispatch({ type: "INCREASE_BY_FIVE", payload: 5 })}
          >
            By 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter