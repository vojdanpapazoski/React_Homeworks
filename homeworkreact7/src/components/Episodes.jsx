// General Import
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//..............................................................................
// Component import

//..............................................................................
        export const Episodes = () => {
            // keeping webpage in constant
            const api_episodes = 'https://rickandmortyapi.com/api/episode'
          
            // keeping initial state of episodes
            const [ episodes, setEpisodes] = useState([]);

            useEffect(()=>(
                axios.get(api_episodes)
                .then((res) => setEpisodes(res.data.results))
                .catch((err) => console.log(err))
            ),([]));
    return(
        <>
        <h3>Listing the episodes of Rick and Morty</h3>
        <h3>Total episodes found: {`${episodes.length}`}</h3>
        {
            episodes.map((episode) => (
                <div key = {episode.id}>
                    <div className="episode-box">
                        <p><span className="name">{episode.name}</span></p>
                        <p>{episode.episode}</p>
                        <p>{episode.air_date}</p>
                    </div>
                    <br />
                </div>
            ))
        }
        </>
    )}