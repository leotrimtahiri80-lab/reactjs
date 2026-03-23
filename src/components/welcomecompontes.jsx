import React from "react";

function WelcomeComponents({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h1>Welcome back</h1>
    } else {
      return <h1>Plase log in</h1>  
    }
}

export default WelcomeComponents;