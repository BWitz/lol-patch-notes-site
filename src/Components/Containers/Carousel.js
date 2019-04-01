import React, { Component } from 'react';
import ChampionSplashCard from "../Functional/ChampionSplashCard"
import "../../App.css";

 export default class Carousel extends Component {

    createChampionCarouselCards = () => {
        return this.props.champions.map(champion => {
            console.log(champion.name);
            return <ChampionSplashCard splashArt={champion.splashart_img_src} name={champion.name} id={champion.id}/>
        })
    }

     render(){
         console.log(this.props.champions, "Carousel props")
         return(
             <div className="carousel-container">
                 <div className="arrow">
                 <img src="https://image.ibb.co/mRsEb7/left_arrow.png" alt="left-arrow" />
                 </div>
                 <div>
                 <ul>
                    {this.createChampionCarouselCards()}
                 </ul>
                 </div>
                 <div class="button" > <img src="https://image.ibb.co/dfPSw7/right_arrow.png" alt="right-arrow"/> </div>
             </div>

         )
     }
 }
