import React from "react";
import "../../App.css";

const ChampionSplashCard = props => {
    console.log("Champion Splash Card")
    return (
        <li><img src={props.splashArt} alt={props.name} data-id={props.id}/> </li>
    );
}

export default ChampionSplashCard;