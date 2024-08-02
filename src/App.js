import React, { useReducer } from "react";

//here is reducer action with 2 arguments which is 
//1. STATE
//2. ACTION
const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { ...state, counter : state.counter + 1 }
        case "toggle":
            return { ...state, text : !state.text }
        default :
            return state;
    }
}

function App() {
    // The syntax of useReducers Hook

    // 1.reducer action
    // 2.Initial values or arguments
    const [ state, dispatch ] = useReducer(reducer, 
        { counter : 0, text : true }) 
    return (
        <>
            <p>{state.counter}</p>
            <button onClick={() => { dispatch({type : "Increment"}); dispatch({ type : "toggle"});}}>Increment</button>
            {state.text && <p>This is toggle text</p> }
        </>
    );
}

export default App;
