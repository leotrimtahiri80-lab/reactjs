import React, { useState } from "react";

function DarkMode() {
    const [isLightmode, setLightmode] = useState(false);

    const pageStyle = {
        backgroundColor: isLightmode ? "white" : "black",
        color: isLightmode ? "black" : "white",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px"
    };

    return (
        <div style={pageStyle}>
            <h1>{isLightmode ? "Light Mode" : "Dark Mode"}</h1>

            <button onClick={() => setLightmode(!isLightmode)}>
               dddfdfd
            </button>
        </div>
    );
}

export default DarkMode;