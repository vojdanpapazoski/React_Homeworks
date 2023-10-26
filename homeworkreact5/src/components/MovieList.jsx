import { Link } from "react-router-dom"

export const MovieList = () => {

const Movies = [
  { id: 1, Name: "Fight Club", Genre: "Thriller, Adventure"},
  { id: 2, Name: "Saving Private Ryan", Genre: "War, History"},
  { id: 3, Name: "Alexander", Genre: "War, History"},
  { id: 4, Name: "Troy", Genre: "War, History"},
  { id: 5, Name: "The Shawshank Redemption",Genre: "Drama, Crime"},
  { id: 6, Name: "Pulp Fiction", Genre: "Crime, Drama"},
  { id: 7, Name: "The Godfather", Genre: "Crime, Drama"},
  { id: 8, Name: "Forrest Gump", Genre: "Drama, Romance"},
  { id: 9, Name: "Inception", Genre: "Action, Sci-Fi"},
  { id: 10, Name: "The Dark Knight", Genre: "Action, Crime"},
  { id: 11, Name: "The Matrix", Genre: "Action, Sci-Fi"},
  { id: 12, Name: "Gladiator", Genre: "Action, Drama"},
  { id: 13, Name: "The Silence of the Lambs", Genre: "Crime, Drama"},
  { id: 14, Name: "Schindler's List", Genre: "Biography, Drama"},
  { id: 15, Name: "Inglourious Basterds", Genre: "Adventure, Drama",},
  { id: 16, Name: "The Lord of the Rings: The Fellowship of the Ring", Genre: "Adventure, Fantasy"},
  { id: 17, Name: "Eternal Sunshine of the Spotless Mind", Genre: "Drama, Romance, Sci-Fi"},
  { id: 18, Name: "The Grand Budapest Hotel", Genre: "Adventure, Comedy, Crime"},
  { id: 19, Name: "The Departed", Genre: "Crime, Drama"},
  { id: 20, Name: "The Godfather Part II", Genre: "Crime, Drama"}
]



    return (
        <div>
           {Movies.map((movie) => (
            <div>
                 <br />
                Movie Name: <Link to={`/movies/${movie.id}`}>{movie.Name}</Link>
                 <br />
                Genre: {movie.Genre}
            </div>
           ))}
        </div>
    )
}