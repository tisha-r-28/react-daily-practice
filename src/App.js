import React from "react";
import * as variables from './components/Practice';

function App() {
    const { course, lname } = variables
    return (
        <>
            {/* <Covid />
             */}
            <>
                <h1>{variables.default}</h1>
                <h1>{lname}</h1>
                <h1>{course}</h1>
            </>
        </>
    );
}

export default App;
