import React from "react";

const bg = {
    backgroundColor: "#AFE1AF",
    width: "100%",
    height: "100vh"
}
const card = {
    width: "50%",
    height: "250px",
    padding: "50px",
    backgroundColor: "white",
    borderRadius: "15px"
}

let greeting = "Good Morning";

const currentDate = new Date(2024, 8, 1, 24);
const hours = currentDate.getHours();
if (hours > 12 && hours <= 0) {
    greeting = "Good Mornig";
} else if (hours > 18 && hours >= 12) {
    greeting = "Good Afternoon";
} else if (hours >= 18 && hours < 24) {
    greeting = "Good Evening";
} else {
    greeting = "Good Night";
}

function App() {

    return (
        <>
            {/* <Covid />
             */}
            <>
                <section style={bg} className="d-flex justify-content-center">
                    <div style={card}>
                        <h1 style={{ color: "#FAA0A0", fontSize: "90px" }}>Hello <span>{greeting}</span></h1>
                    </div>
                </section>
            </>
        </>
    );
}

export default App;
