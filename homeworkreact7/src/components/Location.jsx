// General import
import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

//...............................................................................................
// Components Import 

//...............................................................................................
            export const Location = () => {
                
        // keeping webpage in constant
        const api_url = "https://rickandmortyapi.com/api/character"
    
        // setting the state
        const [results, setResults] = useState([]);
    
        // fetching and console logging it 
        useEffect(() => {
            axios.get(api_url)
            .then((res) => setResults(res.data.results))
            .catch((err) => console.log(err));
        },([]))
    
    
    
    return (
        <> 
        <h3>See the location of every character</h3>
        {results.map((result) => (
            <div key = {result.id} className="character-box">
            <img src={result.image}/>
                <div className="general-info">
                    <p>Location of: <span className='name'>{result.name}</span></p>
                    <p>{result.location.name}</p>
                    <p>{result.location.url}</p>
                </div>    
            </div>
        ))}
            <Link to="/" className="button-back">Back to Homepage</Link>
        </>
    )}
