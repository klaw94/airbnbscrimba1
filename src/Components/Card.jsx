import React from "react";
import star from "../assets/star.png"

export default function Card() {
    return(
        <div className="card">
            <div className="card--imgButtonDiv">
                <button className="card--stateButton">SOLD OUT</button>
            </div>
            <div className="card--textDiv">
                <img src={star} className="star"/>
                <span className="card--grade">5.0</span>
                <span className="gray"> (6)•USA</span>
                <p className="card--description">Life lessons with Katie Zaferes</p>
                <p className="card--price"><span className="bold">From €168</span> / person</p>
            </div>
        </div>
    )
}