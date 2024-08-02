import React, { useEffect, useLayoutEffect, useRef } from "react";

function App() {
    const inputRef = useRef(null)
    useEffect(() => {
        console.log(inputRef.current.value);
    }, [])
    useLayoutEffect(() => {
        inputRef.current.value = "Hello";
    }, [])
    return (
        <>
            <div>
                <h1>Practice hooks</h1>
                <input type="text" name="name" id="name" placeholder="Name" value="Tisha" ref={inputRef}/>
            </div>
        </>
    );
}

export default App;