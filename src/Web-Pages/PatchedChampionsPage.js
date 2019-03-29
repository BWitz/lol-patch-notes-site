import React, { Component } from 'react';
import Carousel from '../Components/Containers/Carousel';
import "../App.css";

export default class PatchedChampionsPage extends Component {

    state={
        champions: []
    }

    componentDidMount(){
        this.getChampions();
    }

    getChampions = () => {
        fetch(`http://localhost:3000/api/v1/champions`)
        .then(res => res.json())
        .then(championData => {
            this.setState({
                champions: championData
            })
        })
    }

    render() {
        console.log(this.state.champions)
        return (
            <div>
                <p>Champions Page Test</p>
                <Carousel champions={this.state.champions} />
            </div>
        )
    }
}