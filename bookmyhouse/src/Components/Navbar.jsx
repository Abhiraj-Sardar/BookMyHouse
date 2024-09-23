import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./Css/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar container">
            <Button 
            variant="outlined"
            sx={{border:"1px solid var(--secondary-color)"}}
            
            >BookMyHouse</Button>
            <ul className={isOpen ? "nav-links nav-active" : "nav-links"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Buy</a></li>
                <li><a href="#services">Rent</a></li>
                <li><a href="#contact">Sell</a></li>
                <li><a href="#contact">Development</a></li>
                <li><a href="#contact">Agents</a></li>
                
                <Button 
                variant="contained"
                sx={{ mt: 1, ml: 2.5,backgroundColor:"var(--dark-color)" }}
                >
                    Register
                </Button>
                

            </ul>
            <div className="burger" onClick={toggleNavbar}>
                <div className={isOpen ? "line1 toggle" : "line1"}></div>
                <div className={isOpen ? "line2 toggle" : "line2"}></div>
                <div className={isOpen ? "line3 toggle" : "line3"}></div>
            </div>
        </nav>
    );
};

export default Navbar;
