import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder";

export default function navbar() {
  return (
    <div className='navbar'>
        <div className="togglebutton">
            <button>
                {" "}
                <ReorderIcon /> {" "}
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
