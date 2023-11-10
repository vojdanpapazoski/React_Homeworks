// General import
import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
//...............................................................................................
// Components Import 
import { Home } from './components/Home'
import { ApiDetails } from './components/ApiDetails'
import { Location } from './components/Location'
import { Episodes } from './components/Episodes'
//...............................................................................................

function App() {
  
  
  
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path ="/characters" element={<ApiDetails />} />
      <Route path = "/location/" element ={<Location/>}/>
      <Route path ="/episodes" element = {<Episodes/>}/>  
    </Routes>
  </>
  )
}


export default App


