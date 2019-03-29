import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

export default class Homepage extends Component {

    render() {

        return (
            <div>
                <h1>League of Legends</h1>
                <h3>Patch 9.6</h3>
                <br />
                <p>Hey beauties. We've got a whole bunch of stuff in this patch, including some small updates to features like LeaverBuster, frame-rate cap, and the Missions Tracker.There’s some tuning to champions we've been seeing regularly, including Neeko (who was nerfed midway through 9.5), Sylas, and Rek'Sai. Kayle is getting minor adjustments based on her first patch performance after being updated. We're bringing ol' Urgod back into relevance with a shield shuffle (it's on his E now!), general buffs, and walking turret mode.
                <br />
                Last thing: We broke double Tear Ezreal.</p>
                <button>Champions</button>
                <button>Items</button>
            </div>
        )

    }
}