import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path = "/users" element={<Users/>}/>
      <Route path = "/userDetails/:id" element ={<UserDetails/>}/>  
    </Routes>
    </>
  )
}

export default App
