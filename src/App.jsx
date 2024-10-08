import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AOS from 'aos'
import "aos/dist/aos.css"
import Women from './components/Women'
import Home from './components/Home'
import Men from './components/Men'
import Kids from './components/Kids'


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration:800,
      easing: "ease-in-sine",
      delay: 100
    })
    AOS.refresh();
  }, [])

  return (

<Router>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Women' element={<Women />}/>
      <Route path='/Men' element={<Men />}/>
      <Route path='/Kids' element={<Kids />}/>
      {/* Add a default route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
</Router>

  )
}

export default App