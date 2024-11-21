import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Video from './pages/Video'

const App = () => {
  const [sidebar , setSidebar] = useState(true);
  return (
    <>
    <Navbar  setSidebar={setSidebar}/>
    <Sidebar  sidebar={sidebar}/>
    
      <div className={` ${sidebar ? "container" : "large_container"}`}>
        <div className="content">
        <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video' element={<Video/>}/>
        </Routes>
        </div>
      </div>
     
      
  
    
    </>
  )
}

export default App