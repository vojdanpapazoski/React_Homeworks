// General Import
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//..............................................................................
// Component import

//..............................................................................
                    export const ApiDetails = () => {
       
        // keeping webpage in constant
        const api_url = "https://rickandmortyapi.com/api/character"
        
        // keeping initial state of characters
        const [ results, setResults ] = useState([])

        // fetching and console logging it res.data.results
        useEffect(() => {
            axios.get(api_url)
            .then((res) => setResults(res.data.results))
            .catch((err) => console.log(err));
        },([]))


        // HERE GOES WHAT IS GOING TO BE DISPLAYED 
    return (
    <> 
    <h3>Browse the characters of Rick and Morty Api</h3>
    {results.map((result) => (
   
        <div key = {result.id} className="character-box">
            <img src={result.image}/>
                <div className="general-info">
                    <p>{result.id}</p>
                    <p>{result.name}</p>
                    <p>{result.status}</p>
                    <div className="links">
                      <p><Link to = "/location" className="location-paragraph">Location</Link></p>
                      <p><Link to = "/episodes" className="location-paragraph">Episodes</Link></p>
                    </div>
                </div>
        </div>   
    ))}
            <Link to="/" className="button-back">Back to Homepage</Link>
    </>
)}




