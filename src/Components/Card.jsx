import React from "react";
import star from "../assets/star.png"


export default function Card(props) {
    let badgeText;
    
    if (props.item.openSpots === 0 ){
        badgeText = "SOLD OUT"
    } else if (props.item.country === "Online"){
        badgeText = "ONLINE"
    }
    
    return(
        <div className="card" id={props.item.id}>
            <div className="card--imgButtonDiv">
                <img src={`/${props.item.coverImg}`} alt="" className="card--img"/>
                {badgeText != null && <button className="card--stateButton">{badgeText}</button>}
            </div>
            <div className="card--textDiv">
                <img src={star} className="star"/>
                <span className="card--grade">{props.item.stats.rating.toFixed(1)}</span>
                <span className="gray"> ({props.item.stats.reviewCount})•{props.item.country}</span>
                <p className="card--description">{props.item.title}</p>
                <p className="card--price"><span className="bold">From €{props.item.price}</span> / person</p>
            </div>
        </div>
    )
}

