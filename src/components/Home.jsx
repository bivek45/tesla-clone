import React from 'react'

const Home = ({title, price1, price2, backgroundImg}) => {
  return (
    <>
      <div className='relative w-full max-wi-lg'>
        <img className="h-screen w-full object-cover" src={backgroundImg} alt="Model Y" />
        <div className='absolute top-10 left-0 right-0 bottom-0  items-center justify-center p-4'>
          <h1 className="text-black text-3xl font-bold text-center ">{title}</h1>
          <h2 className='tezt-2xl font-bold p-1 text-center'>From {price1}</h2>
          <p className='text-xs text-center'>After Federal Tax Credit & Est Gas Saving</p>
        </div>
        <div class="absolute inset-x-0 bottom-10 flex justify-center items-center gap-4 px-9">
        <button class="bg-white rounded-md w-60 h-17 text-black text-center font-medium shadow">Order Now</button>
        <button class="bg-black opacity-75 rounded-md w-60 h-17 text-white text-center font-medium shadow">Demo Drive</button>
    </div>
        <p className="absolute inset-x-0 px-20 bottom-5 text-center text-xs">*Price before incentives is {price2}, excluding taxes and fees. Subject to Change.</p>
      </div>
    </>
  )
}

export default Home
