import './App.css'
import { Link, Route, Routes} from "react-router-dom"
import { Home } from './components/Home'
import { MovieList } from './components/MovieList'
import { NewMovie } from './components/NewMovie'
import { NotFound } from './components/NotFound'
import { Movie } from './components/Movie'

function App() {
  return (    
  <div>
  <nav>
    <ul>
      <li>
         <Link to = "/">Home</Link> 
      </li>
      <li>
         <Link to = "/movies">Movies</Link>
      </li>
      <li>
         <Link to = "/movies/new">Add new Movie</Link>
      </li>
    </ul>
  </nav>
<hr />

  <Routes>
    <Route path = "/" element={<Home/>}></Route>
    <Route path = "/movies" element={<MovieList/>}></Route>
    <Route path = "/movies/new" element={<NewMovie/>}></Route>
    <Route path = "movies/:id" element ={<Movie/>}></Route>
    <Route path = "*" element={<NotFound/>}></Route>
  </Routes>
<hr />
</div>
  )
}

export default App
