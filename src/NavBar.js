import React from 'react';
// Import CSS file for styling
import './NavBar.css';

// Define the NavBar component
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Portfolio
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Project</a></li>
                <li><a href="#contact">Resume</a></li>
            </ul>
        </nav>
    );
}

// Export the NavBar component
export default NavBar;