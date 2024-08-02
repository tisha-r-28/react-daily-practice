import React, { useRef } from "react";

function App() {
    const nameInput = useRef(null);
    const handleClick = () => {
        console.log(nameInput.current.value);
    }
    return (
        <>
            <div>
                <input type="text" name="name" id="name" placeholder="Enter name ..." ref={nameInput} />
                <button onClick={() => { handleClick() }}>Change the name</button>
            </div>
        </>
    );
}

export default App;