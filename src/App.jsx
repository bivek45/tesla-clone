import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {


  return (
    <>

      <div >
        <Navbar />
        <div>
          <Home
            title="Model Y"
            price1="$29,490*"
            price2="42990"
            backgroundImg="model-y.jpg"
          />
        </div>
        <div>
          <Home
            title="Model 3"
            price1="$299/mo*"
            price2=""
            backgroundImg="Homepage-Model-3-Desktop-LHD-v2.avif"
          />
        </div>
        <div>
          <Home
            title="Model X"
            price1="$63,990*"
            price2="77,990"
            backgroundImg="model-x.jpg"
          />
        </div>
        <div>
        <Home
            title="Model S"
            price1="$66,490*"
            price2="72,990"
            backgroundImg="Homepage-Model-S-Desktop-LHD-6.22.avif"
          />
        </div>
      </div>



    </>
  )
}

export default App
