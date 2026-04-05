import React from 'react'
import Home from './Home'
import About from './About'
 import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
