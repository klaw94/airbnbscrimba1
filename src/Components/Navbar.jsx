import React from "react";
import logo from "../assets/airbnbLogo.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} className="logo"/>
        </nav>
    )
}