import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Title } from './components/Title/Title'
import { CardProvider } from './context/CardProvider'
import { Services } from './pages/Services'

function App () {
  return (
    <>
      <Router>
        <CardProvider>
          <Title />
          <Navbar />

          <Routes>
            <Route path='/' element={<Services />} />
            <Route path='/autos' element={<Services />} />
            <Route path='/salud' element={<Services />} />
            <Route path='/hogar' element={<Services />} />
          </Routes>
        </CardProvider>
      </Router>
    </>
  )
}

export default App
