import React from "react";
import experiencesPic from "../assets/experiences.png"

export default function Header(){
    return(
        <div className="header">
            <img src={experiencesPic} className="headerImage"/>
            <h1 className="title">Online Experiences</h1>
            <h3 className="subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
    )
}