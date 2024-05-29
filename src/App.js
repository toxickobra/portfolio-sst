import React from 'react';
import './App.css';
import NavBar from './NavBar'; // Import NavBar component
import Typing from './Typing'; // Import Typing component

function App() {
    return (
        <div>
            <NavBar />
            <Typing
                typingSpeed={100}    // Customize typing speed in milliseconds
                deletingSpeed={50}   // Customize deleting speed in milliseconds
                texts={["Hello, world!", "Welcome to My Portfolio ", "Enjoy your stay!"]}  // Pass an array of texts to be typed
            />
        </div>
    );
}

export default App;
