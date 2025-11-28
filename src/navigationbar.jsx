import React from 'react';
import './navigation.css';

function NavigationBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div className="nav-container">
            <div className="nav-logo">MyApp</div>
            {/* The 'open' class is toggled here */}
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home" className='fool'>Home</a>
                <a href="#about" className='fool'>About</a>
                <a href="#services" className='fool'>Services</a>
                <a href="#contact" className='fool'>Contact</a>
            </div>
            {/* Hamburger icon for mobile */}
            <div className="nav-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
}

export default NavigationBar;