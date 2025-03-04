import React from 'react'
import { Routes, Route } from 'react-router'

import Home from "./pages/Home"
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {

  // Logic

  // HTML
  return (
    <>
    <Routes>
      <Route path="/" element={(<Home />)} />
      <Route path="/about" element={(<About />)} />
      <Route path="/work" element={(<Work />)} />
      <Route path="/contact" element={(<Contact />)} />
    </Routes>
    </>
  )
}

export default App
