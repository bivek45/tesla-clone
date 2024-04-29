import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {


  return (
    <>

      <div className="bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-Global.jpg')] lg:bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png')] h-screen bg-cover bg-center">
        <Navbar />
        <Home />
      </div>
      

    </>
  )
}

export default App
