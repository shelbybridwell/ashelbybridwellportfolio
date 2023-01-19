import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="togglebutton">
            <button
            onClick={() => {
                setExpandNavbar((prev) => !prev);
            }}
            >
               
                <ReorderIcon />
            </button>
            </div>
        <div class='links'>
            <Link to="/"> Home .</Link>
            <Link to="/about"> About .</Link>
            <Link to="/portfolio"> Portfolio . </Link>
            <Link to="/contact"> Contact .</Link>
        </div></div>
  )
}

export default Navbar;