import React from "react";
import star from "../assets/star.png"


export default function Card(props) {
    return(
        <div className="card" id={props.id}>
            <div className="card--imgButtonDiv">
                <img src={`/${props.img}`} alt="" className="card--img"/>
                <button className="card--stateButton">{props.statusButton}</button>
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