import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Blogs from './pages/Blogs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
