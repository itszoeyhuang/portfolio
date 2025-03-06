import React from 'react'
import { Routes, Route } from 'react-router'

import PageWrap from './global/PageWrap'
import Home from "./pages/Home"
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import StyleGuide from './pages/StyleGuide'

function App() {

  // Logic

  // HTML
  return (
    <>
    <Routes>
      <Route path="/" element={<PageWrap />}>
        <Route index element={<Home/>} />
        <Route path="/about" element={(<About />)} />
        <Route path="/work" element={(<Work />)} />
        <Route path="/contact" element={(<Contact />)} />
        <Route path='/styleguide' element={(<StyleGuide />)} />
      </Route>
    </Routes>
    </>
  )
}

export default App
