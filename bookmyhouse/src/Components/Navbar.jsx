import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import "./Css/Navbar.css";
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the navbar open/close state
    const toggleNavbar = () => {
        setIsOpen((prev) => !prev); 
        var nav=document.querySelector(".nav-links");
        nav.style.transform="translateX(0%)";
    };

    const pushNavbar=()=>{
        
        var nav=document.querySelector(".nav-links");
        nav.style.transform="translateX(110%)";
    }
    // Function to close the navbar when a link is clicked
    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar container">
            <Button 
                variant="outlined"
                sx={{border: "1px solid var(--secondary-color)"}}
            >
                BookMyHouse
            </Button>
            
            <ul className="nav-links">
                <CloseIcon
                onClick={pushNavbar}
                className="close"
                sx={{position:"absolute",top:"0.5rem",right:"0.5rem"}}
                />
                <li>
                    <NavLink exact to="/" activeClassName="active-link" onClick={closeNavbar}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/rent" activeClassName="active-link" onClick={closeNavbar}>Buy</NavLink>
                </li>
                <li>
                    <NavLink exact to="/rent" activeClassName="active-link" onClick={closeNavbar}>Rent</NavLink>
                </li>
                <li>
                    <NavLink exact to="/rent" activeClassName="active-link" onClick={closeNavbar}>Sell</NavLink>
                </li>
                <li>
                    <NavLink exact to="/rent" activeClassName="active-link" onClick={closeNavbar}>Development</NavLink>
                </li>
                <li>
                    <NavLink exact to="/rent" activeClassName="active-link" onClick={closeNavbar}>Agents</NavLink>
                </li>
                <Button 
                    variant="contained"
                    sx={{ mt: 1, ml: 2.5, backgroundColor: "var(--dark-color)" }}
                    onClick={closeNavbar}
                >
                    Register
                </Button>
            </ul>
            <div className="burger" onClick={toggleNavbar}>
                <MenuIcon/>
            </div>
        </nav>
    );
};

export default Navbar;
