import React from "react";
import star from "../assets/star.png"


export default function Card(props) {
    let badgeText;
    
    if (props.openSpots === 0 ){
        badgeText = "SOLD OUT"
    } else if (props.country === "Online"){
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card" id={props.id}>
            <div className="card--imgButtonDiv">
                <img src={`/${props.img}`} alt="" className="card--img"/>
                {(props.openSpots ===0 || props.country === "Online") && <button className="card--stateButton">{badgeText}</button>}
            </div>
            <div className="card--textDiv">
                <img src={star} className="star"/>
                <span className="card--grade">{props.grade.toFixed(1)}</span>
                <span className="gray"> ({props.nOfVotes})•{props.country}</span>
                <p className="card--description">{props.title}</p>
                <p className="card--price"><span className="bold">From €{props.price}</span> / person</p>
            </div>
        </div>
    )
}