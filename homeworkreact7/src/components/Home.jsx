import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
              <h3>Check our Api for Rick and Morty Characters</h3>
              <Link to = "/characters" className="click-to-characters">Click here to see Characters</Link>
        </>

    )
}